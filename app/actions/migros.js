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
}

export default alt.createActions(MigrosActions)
