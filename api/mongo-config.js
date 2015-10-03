import cfenv from 'cfenv'

var url = "mongodb://localhost:27017/kingdom"

if(process.env.VCAP_APPLICATION) {
  let appEnv = cfenv.getAppEnv();

  console.log(appEnv);

  console.log(appEnv.getService('kingdom_mongo'))

  console.log(appEnv.getServiceUrl('kingdom_mongo'))

  url = appEnv.getService('kingdom_mongo')['uri'];
}

export default {
  url
}
