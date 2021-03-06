import express from 'express'
import bodyParser from 'body-parser'
import homegate from './homegate'
import arrlee from './arrlee'
import meetups from './meetups'
import instagram from './instagram'

let app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.use(homegate)

app.use(arrlee)

app.use(meetups);

app.use(instagram);

export default app
