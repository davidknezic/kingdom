import express from 'express'

import station from './arrlee/station'

let app = express()
// /ajax/station?term=${query}&lvdist=0&max_num=15&countries=DE%2CCH%2CAT%2CLI
// localhost:8001/stations?query=...
app.get('/stations', [
  function (req, res, next) {

    console.log('processing', '/stations'.cyan)

    station(req.query.query, (err, result) => {
      if (err) {
        res.send(err)
      }
      else {
        res.send(result.body)
      }
    })
  }
])

export default app
