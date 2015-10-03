import alt from '../alt'
import request from './utils/request'
import config from '../config'

class FlatsActions {

  constructor() {
  }

  show(profile) {
    this.dispatch()

    if (this.currentRequest) {
      this.currentRequest.abort()
    }

    currentRequest = request
      .get(`${config.api.endpoint}/flats`)
      .query({'query': {
        roomFrom: profile.rooms.min,
        roomTo: profile.rooms.max,
        areaFrom: profile.area.min,
        areaTo: profile.area.max,
        priceFrom: profile.price.min,
        priceTo: profile.price.max,
      }})

    currentRequest
      .then((response) => {
        currentRequest = null;
        this.actions.showCompleted(response.body)
      }).catch((err) => {
        currentRequest = null;
        this.actions.showFailed(err)
      })
  }
}

export default alt.createActions(FlatsActions)
