import express from 'express'
import superagent from 'superagent'

let app = express()

//localhost:8001/flats
//localhost:8001/flats
app.get('/flats', [
  function (req, res, next) {
    superagent
      .get('https://api-2445581357976.apicast.io:443/rs/real-estates')
      .set('auth', '201a03b2f0ef8b311cdd2157c21c3666')
      .query({ language: 'en' })
      .query({ chooseType: 'rentflat' })
      .query({ sort: 'l' })
      .query({ numberResults: (req.query.pagesize? req.query.pagesize: 10) })
      .end(function(err, result){
         if (result.ok) {
           res.send(result)
         } else {
           console.log(err)
           res.send(fail)
         }
      })
  }
])

export default app
