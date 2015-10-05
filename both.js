import http from 'http'
import colors from 'colors'
import express from 'express'

import fetchHomegateData from './api/utils/fetch-homegate'
import api from './api'

let ports = {
  app: 8000,
  api: 8001
}

let app = express()

app.use('/', express.static(`${__dirname}/dist`))

fetchHomegateData(() => {})

http.createServer(app).listen(ports.app, '0.0.0.0', function () {
  let status = 'running'.green.bold
  let url = `http://0.0.0.0:${ports.app}`.cyan

  console.log(`App server ${status} on ${url}`)
})

http.createServer(api).listen(ports.api, '0.0.0.0', function () {
  let status = 'running'.green.bold
  let url = `http://0.0.0.0:${ports.api}`.cyan

  console.log(`API server ${status} on ${url}`)
})
