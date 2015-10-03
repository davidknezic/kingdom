import alt from '../alt'
import request from './utils/request'
import config from '../config'
import geolib from 'geolib'
import _ from 'lodash'
import everything from './migros.json'

class MigrosActions {

  search(center) {
    let results = _.filter(everything.features, (feature) => {
      let lat = feature.geometry.coordinates[0]
      let lng = feature.geometry.coordinates[1]

      return geolib.isPointInCircle(
        { latitude: lat, longitude: lng },
        { latitude: center.lat, longitude: center.lng },
        5000
      )
    })

    let shops = _.map(results, (feature) => {
      let lat = feature.geometry.coordinates[0]
      let lng = feature.geometry.coordinates[1]
      let name = feature.properties.name

      return {
        lat,
        lng,
        name
      }
    })

    this.dispatch(shops)
  }
}

export default alt.createActions(MigrosActions)
