import express from 'express'

import categories from './meetup/categories';
import find from './meetup/find';

let app = express()

app.get('/meetups/categories', [
  function (req, res, next) {

    console.log('processing', '/meetups/categories'.cyan)

    categories(req.query.query, (err, result) => {
         if (result.ok) {
           res.send(result.body.results)
         } else {
           res.send(err)
         }
      })
  }
])

app.get('/meetups/find', [
  function (req, res, next) {

    console.log('processing', '/meetups/find'.cyan)

    find(req.query.category, (err, result) => {
         if (result.ok) {
           res.send(result.body)
         } else {
           res.send(err)
         }
      })
  }
])

export default app
