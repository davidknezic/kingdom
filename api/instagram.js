import express from 'express'

import media from './instagram/media'

let app = express()

app.get('/instagram/media/search', [
  function (req, res, next) {
    media(req.query.lat, req.query.lng, (err, result) => {
         if (result.ok) {
           res.send(result.body.data)
         } else {
           res.send(err)
         }
      })
  }
])

export default app
