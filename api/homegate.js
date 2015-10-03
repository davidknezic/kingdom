import express from 'express'
import moment from 'moment'
import superagent from './utils/superagent'

import pointsInPolygon from './utils/point-in-polygon'

import heatmap from './arrlee/heatmap'

var authKey = '201a03b2f0ef8b311cdd2157c21c3666'
let app = express()

app.get('/flats-in-location-to', (req, res, next) => {

  if(req.query.station) {

    if(!Array.isArray(req.query.station)) {
      req.query.station = [ req.query.station ];
    }

    var heatmapPromises = [];

    for(var i = 0; i < req.query.station.length; i++) {

      var station = JSON.parse(req.query.station[i]);
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

    superagent
      .get('https://api-2445581357976.apicast.io:443/rs/real-estates')
      .set('auth', authKey)
      .query({ language: 'en' })
      .query({ chooseType: 'rentflat' })
      .query({ sort: 'l' })
      .query({ numberResults: (req.query.pagesize? req.query.pagesize: 1000) })
      .end(function(err, result){
        if (result.ok) {

          var flats = result.body.items;

          console.log('flats', flats.length)

          Promise.all(heatmapPromises).then((heatmaps) => {

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
                      flatsToCheckInHeatmap[l].area[i] = {
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

            res.send({
              count: hits.length,
              hits: hits
            });
          });

        } else {
          res.send(err)
        }
      })

  } else {
    res.send({ error: "you missed to send stations" });
  }

})

//localhost:8001/flats
//localhost:8001/flats?pagesize=1
app.get('/flats', [
  function (req, res, next) {
    superagent
      .get('https://api-2445581357976.apicast.io:443/rs/real-estates')
      .set('auth', authKey)
      .query({ language: 'en' })
      .query({ chooseType: 'rentflat' })
      .query({ sort: 'l' })
      .query({ numberResults: (req.query.pagesize? req.query.pagesize: 10) })
      .end(function(err, result){
         if (result.ok) {
           res.send(result.body)
         } else {
           res.send(err)
         }
      })
  }
])

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
