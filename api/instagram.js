import express from 'express'

import media from './instagram/media'

let app = express()

app.get('/instagram/media/search', [
  function (req, res, next) {

    console.log('processing', '/instagram/media/search'.cyan)

    media(req.query.lat, req.query.lng, function(err, result) {
         if (result.ok) {
           if(result.body.data && result.body.data.length > 6) {
             result.body.data = result.body.data.slice(0,6)
           }

           res.send(result.body.data)
         } else {
           res.send(err)
         }
      })
  }
])

export default app
