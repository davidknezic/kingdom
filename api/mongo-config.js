import cfenv from 'cfenv'
import colors from 'colors'

var url = "mongodb://localhost:27017/kingdom"

if (process.env.VCAP_APPLICATION) {
  let appEnv = cfenv.getAppEnv()

  url = appEnv.getServiceURL('kingdom_mongo')
}

let host = process.env.MONGODB_PORT_27017_TCP_ADDR
let port = process.env.MONGODB_PORT_27017_TCP_PORT

if (host && port) {
  url = `mongodb://${host}:${port}/kingdom`

  console.log(`using mongodb hosted on '${host.green}:${port.green}'`)
}

export default {
  url
}
