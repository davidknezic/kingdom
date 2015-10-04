import alt from '../alt'
import request from './utils/request'
import config from '../config'
import geolib from 'geolib'
import _ from 'lodash'
import migros from '../data/migros.json'

class MigrosActions {

  search(center) {
    let shops = _.filter(migros, (migi) => {
      return geolib.isPointInCircle(
        { latitude: migi.lat, longitude: migi.lng },
        { latitude: center.lat, longitude: center.lng },
        5000
      )
    })

    this.dispatch(shops)
  }

  distance(origin) {
    let lat = parseFloat(origin.lat)
    let lng = parseFloat(origin.lng)

    let everything = _.map(migros, (migi) => {
      return {
        // file is wrong (lat and lng are switched)
        longitude: migi.lat,
        latitude: migi.lng,
        name: migi.name,
      }
    })

    let hit = geolib.findNearest({
      latitude: lat,
      longitude: lng,
    }, everything)

    let distance = geolib.getDistance({
      latitude: lat,
      longitude: lng,
    }, hit)

    this.dispatch({
      hit: hit,
      distance: distance
    })
  }
}

export default alt.createActions(MigrosActions)
