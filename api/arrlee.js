import express from 'express'

import station from './arrlee/station'

let app = express()
// /ajax/station?term=${query}&lvdist=0&max_num=15&countries=DE%2CCH%2CAT%2CLI
// localhost:8001/stations?query=...
app.get('/stations', [
  function (req, res, next) {
    station(req.query.query, (err, result) => {
         if (result.ok) {
           res.send(result.body)
         } else {
           res.send(err)
         }
      })
  }
])

export default app
