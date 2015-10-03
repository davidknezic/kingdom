import express from 'express'
import moment from 'moment'
import superagent from './utils/superagent'

import pointsInPolygon from './utils/point-in-polygon'

import heatmap from './arrlee/heatmap'

var authKey = '201a03b2f0ef8b311cdd2157c21c3666'
let app = express()

app.get('/flats-in-location-to', (req, res, next) => {

  try {

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

      var flats = []

      for(var i = 0.001; i <= 7; i+=0.001) {
        flats.push({
          lng: Math.round((7.4625 + i) * 1000) / 1000,
          lat: Math.round((46.96471 + i) * 1000) / 1000
        })
      }
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
                return [
                  flat.lng,
                  flat.lat
                ]
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

        res.send(hits);
      });

    } else {
      res.send({ error: "you missed to send stations" });
    }

  } catch(e) {
    console.log(e);
  }

})

export default app
