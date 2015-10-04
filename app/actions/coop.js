import alt from '../alt'
import request from './utils/request'
import config from '../config'
import geolib from 'geolib'
import _ from 'lodash'
import coops from '../data/coop.json'

class CoopActions {

  search(center) {
    let shops = _.filter(coops, (coop) => {
      return geolib.isPointInCircle(
        { latitude: coop.lat, longitude: coop.lng },
        { latitude: center.lat, longitude: center.lng },
        5000
      )
    })

    this.dispatch(shops)
  }

  distance(origin) {
    let lat = parseFloat(origin.lat)
    let lng = parseFloat(origin.lng)

    let everything = _.map(coops, (coop) => {
      return {
        latitude: coop.lat,
        longitude: coop.lng,
        name: coop.name,
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

export default alt.createActions(CoopActions)
