import express from 'express'
import moment from 'moment'
import superagent from './utils/superagent'

import heatmap from './arrlee/heatmap'

var authKey = '201a03b2f0ef8b311cdd2157c21c3666'
let app = express()

app.get('/flats-in-location-to', (req, res, next) => {

  if(req.query.station) {

    if(!Array.isArray(req.query.station)) {
      req.query.station = [ req.query.station ];
    }

    var heatmapPromosies = [];

    for(var i = 0; i < req.query.station.length; i++) {

      var station = JSON.parse(req.query.station[i]);
      var date = moment().day(-6).toDate();

      heatmapPromosies.push(new Promise((resolve, reject) => {
        heatmap(station.uic, station.cntr, date, station.maxTime, (err, result) => {
           if (result.ok) {
             resolve(result.body)
           } else {
             reject(err)
           }
        })
      }));

    }

    Promise.all(heatmapPromosies).then((data) => {
      res.send(data);
    });

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
