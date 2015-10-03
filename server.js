import http from 'http'
//import https from 'https'
//import fs from 'fs'
import colors from 'colors'
import api from './api'

http.createServer(api).listen(8001, '127.0.0.1', function () {
  console.log(`API server ${'running'.green.bold} on ${'http://127.0.0.1:8001'.cyan}`)
})
