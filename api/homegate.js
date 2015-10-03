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

  if(req.query.station) {

    console.log(req.query)

    if(!req.query.roomFrom) {
      res.end({error: "roomFrom missing"})
    }

    if(!req.query.roomTo) {
      res.end({error: "roomTo missing"})
    }

    if(!req.query.areaFrom) {
      res.end({error: "areaFrom missing"})
    }

    if(!req.query.areaTo) {
      res.end({error: "areaTo missing"})
    }

    if(!req.query.priceFrom) {
      res.end({error: "priceFrom missing"})
    }

    if(!req.query.priceTo) {
      res.end({error: "priceTo missing"})
    }

    if(!Array.isArray(req.query.station)) {
      req.query.station = [ req.query.station ];
    }

    MongoClient.connect(mongoConfig.url, function(err, db) {

      var flats = db.collection('flats');

      flats.find({
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
      }).toArray((err, data) => {
        doIt(req.query.station, data).then((data) => {
          res.send(data);
        });
      });

    })

  } else {
    res.send({ error: "you missed to send stations" });
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

    // TODO: use forEach
    heatmaps.forEach((heatmap) => {

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

          if(inclusion ==0 ) {
            return true;
          }

          var results = pointsInPolygon(flatsToCheckInHeatmap.map((flat) => {
            return flat.geoLocation.split(',')
          }), polygon);

          for(var l = 0; l < flatsToCheckInHeatmap.length; l++) {

            if(results[l] == 1) {
              if(!flatsToCheckInHeatmap[l].area) {
                flatsToCheckInHeatmap[l].area = [];
              }
              flatsToCheckInHeatmap[l].area[heatmap.start[0].uic] = {
                min: area.min,
                max: area.max
              }

              flatsToCheckInHeatmap.splice(l,1)
            }
          }

          return true;

        })

        return true;

      })

    })

    var hits = flats.filter((flat) => { return !!flat.area });

    return({
      count: hits.length,
      hits: hits
    });
  });

}

//http://localhost:8001/flats/105321232
app.get('/flats/:id', [
  function (req, res, next) {
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
