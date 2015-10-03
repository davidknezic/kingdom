// get file from:
// http://www.poi4u.com/images/Zip/Migros.zip?lang=de

import migros from './migros.json'
import _ from 'lodash'

let list = _.map(migros.features, function (feature) {
  return {
    lat: feature.geometry.coordinates[0],
    lng: feature.geometry.coordinates[1],
    name: feature.properties.name
  }
})

console.log(JSON.stringify(list))
