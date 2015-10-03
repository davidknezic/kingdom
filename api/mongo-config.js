import cfenv from 'cfenv'

var url = "mongodb://localhost:27017/kingdom"

if(process.env.VCAP_APPLICATION) {
  let appEnv = cfenv.getAppEnv();

  url = appEnv.getServiceURL('kingdom_mongo')
}

export default {
  url
}
