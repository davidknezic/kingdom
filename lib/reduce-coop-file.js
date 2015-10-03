// get file from:
// http://www.coop.ch/pb/site/vstinfo/node/76518709/Lde/index.html

import coops from './coops.json'
import _ from 'lodash'

let list = _.map(coops.vstList, function (coop) {
  return {
    lat: coop.latitude,
    lng: coop.longitude,
    name: coop.name
  }
})

console.log(JSON.stringify(list))
