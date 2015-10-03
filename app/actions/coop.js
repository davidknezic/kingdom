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
}

export default alt.createActions(CoopActions)
