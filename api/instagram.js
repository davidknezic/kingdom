import express from 'express'

import media from './instagram/media'

let app = express()

app.get('/instagram/media/search', [
  function (req, res, next) {

    console.log('processing', '/instagram/media/search'.cyan)

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
