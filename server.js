import http from 'http'
//import https from 'https'
//import fs from 'fs'
import colors from 'colors'
import api from './api'

let port = process.env.PORT || 8001

http.createServer(api).listen(port, '0.0.0.0', function () {
  console.log(`API server ${'running'.green.bold} on ${'http://0.0.0.0:'.cyan}${port.cyan}`)
})
