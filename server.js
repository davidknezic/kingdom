import http from 'http'
import colors from 'colors'
import api from './api'

import fetchHomegateData from './api/utils/fetch-homegate'

let port = process.env.PORT || 8001

fetchHomegateData(() => {})

http.createServer(api).listen(port, '0.0.0.0', function () {
  let status = 'running'.green.bold
  let url = `http://0.0.0.0:${port}`.cyan

  console.log(`API server ${status} on ${url}`)
})
