import http from 'http'
//import https from 'https'
//import fs from 'fs'
import colors from 'colors'
import express from 'express'

let app = express()

app.use('/', express.static(__dirname+'/dist'))

let port = process.env.PORT || 8000

http.createServer(app).listen(port, '0.0.0.0', function () {
  let status = 'running'.green.bold
  let url = `http://0.0.0.0:${port}`.cyan

  console.log(`App server ${status} on ${url}`)
})
