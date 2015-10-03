import express from 'express'
import superagent from 'superagent'

var authKey = '201a03b2f0ef8b311cdd2157c21c3666'
let app = express()

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
           res.send(result)
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
           res.send(result)
         } else {
           res.send(err)
         }
      })
  }
])

export default app
