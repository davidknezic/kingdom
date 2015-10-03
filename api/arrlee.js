import express from 'express'
import superagent from 'superagent'

let app = express()
// /ajax/station?term=${query}&lvdist=0&max_num=15&countries=DE%2CCH%2CAT%2CLI
// localhost:8001/stations?query=...
app.get('/stations', [
  function (req, res, next) {
    superagent
      .get('http://arrlee.ch/ajax/station')
      .query({ lvdist: '0' })
      .query({ max_num: '15' })
      .query({ countries: 'DE,CH,AT,LI' })
      .query({ term: req.query.query })
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
