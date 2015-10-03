import express from 'express'
import bodyParser from 'body-parser'
import homegate from './homegate'

let app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.get('/test', function (req, res) {
  res.send('Hello World!')
})

app.use(homegate)

export default app
