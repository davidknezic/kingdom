import cfenv from 'cfenv'

var url = "mongodb://localhost:27017/kingdom"

if(process.env.VCAP_APPLICATION) {
  let appEnv = cfenv.getAppEnv();
  appEnv.getService
  url = appEnv.getService('kingdom_mongo')['uri'];
}

export default {
  url
}
