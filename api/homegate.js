import express from 'express'
import moment from 'moment'
import superagent from './utils/superagent'
import {MongoClient} from 'mongodb'
import mongoConfig from './mongo-config'

import pointsInPolygon from './utils/point-in-polygon'

import heatmap from './arrlee/heatmap'

var authKey = '201a03b2f0ef8b311cdd2157c21c3666'
let app = express()

app.get('/flats', (req, res, next) => {

  console.log('processing', '/flats'.cyan)

  if(req.query.station) {

    console.log(req.query)

    if(!req.query.roomFrom) {
      res.end('{error: "roomFrom missing"}')
    }

    if(!req.query.roomTo) {
      res.end('{error: "roomTo missing"}')
    }

    if(!req.query.areaFrom) {
      res.end('{error: "areaFrom missing"}')
    }

    if(!req.query.areaTo) {
      res.end('{error: "areaTo missing"}')
    }

    if(!req.query.priceFrom) {
      res.end('{error: "priceFrom missing"}')
    }

    if(!req.query.priceTo) {
      res.end('{error: "priceTo missing"}')
    }

    if(!Array.isArray(req.query.station)) {
      req.query.station = [ req.query.station ];
    }

    MongoClient.connect(mongoConfig.url, function(err, db) {

      var flats = db.collection('flats');

      var search = {
        sellingPrice: {
          '$gt': parseInt(req.query.priceFrom, 10),
          '$lt': parseInt(req.query.priceTo, 10)
        },
        numberRooms: {
          '$gte': parseFloat(req.query.roomFrom),
          '$lte': parseFloat(req.query.roomTo)
        },
        surfaceLiving: {
          '$gte': parseFloat(req.query.areaFrom),
          '$lte': parseFloat(req.query.areaTo)
        }
      };

      flats.find(search, {
        advId: true,
        title: true,
        street: true,
        zip: true,
        geoLocation: true,
        objectTypeLabel: true,
        numberRooms: true,
        floorLabel: true,
        surfaceLiving: true,
        currency: true,
        sellingPrice: true,
        picFilename1Small: true,
        picFilename1Medium: true,
        city: true,
      }).toArray((err, data) => {
        console.log((data.length+'').cyan, 'flats match search criteria', JSON.stringify(search).blue)
        doIt(req.query.station, data).then((data) => {
          res.send(data);
        });
      });

    })

  } else {
    res.end('{ error: "you missed to send stations" }');
  }

})

function doIt(stations, flats) {
  var heatmapPromises = [];

  for(var i = 0; i < stations.length; i++) {

    var station = JSON.parse(stations[i]);
    var date = moment().day(-6).toDate();

    heatmapPromises.push(new Promise((resolve, reject) => {
      heatmap(station.uic, station.cntr, date, station.maxTime, (err, result) => {
         if (!err && result.ok) {
           resolve(result.body)
         } else {
           reject(err)
         }
      })
    }));

  }

  return Promise.all(heatmapPromises).then((heatmaps) => {

    console.log('loaded', (heatmaps.length+'').cyan, 'heatmaps')

    heatmaps.forEach((heatmap) => {

      var uic = heatmap.start[0].uic+'';

      console.log('processing heatmap with uic', uic.cyan)

      var flatsToCheckInHeatmap = flats.slice();

      // match heatmaps
      var areas = heatmap.heatmap.areas;

      areas.every((area) => {

        if(flatsToCheckInHeatmap.length == 0) {
          return false;
        }

        var polygons = area.polygons;

        polygons.every((polygon) => {
          if(flatsToCheckInHeatmap.length == 0) {
            return false;
          }

          var inclusion = polygon.shift();

          if(inclusion == 0) {
            return true;
          }

          var results = pointsInPolygon(flatsToCheckInHeatmap.map((flat) => {
            return flat.geoLocation.split(',')
          }), polygon);

          flatsToCheckInHeatmap = flatsToCheckInHeatmap.filter((flatToCheck, l) => {
            if(results[l] == 1) {
              if(!flatToCheck.area) {
                flatToCheck.area = {};
              }

              flatToCheck.area[uic] = {
                min: area.min,
                max: area.max
              }

              return false;
            }

            return true;

          })

          return true;

        })

        return true;

      })

      console.log('processing heatmap with uic', (heatmap.start[0].uic+'').cyan, 'finished')

    })

    var hits = flats.filter((flat) => { return !!flat.area });

    console.log((hits.length+'').cyan, 'flats in reachable distance');

    return {
      count: hits.length,
      hits: hits
    }

  });

}

//http://localhost:8001/flats/105321232
app.get('/flats/:id', [
  function (req, res, next) {
    console.log('processing', ('/flats/'+req.params.id).cyan)

    superagent
      .get('https://api-2445581357976.apicast.io:443/rs/real-estates/' + req.params.id)
      .set('auth', authKey)
      .query({ language: 'en' })
      .end(function(err, result){
         if (result.ok) {
           res.send(result.body)
         } else {
           res.send(err)
         }
      })
  }
])

export default app
