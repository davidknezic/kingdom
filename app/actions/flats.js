import alt from '../alt'
import request from './utils/request'
import config from '../config'

class FlatsActions {

  constructor() {
    this.generateActions('showCompleted', 'showFailed')
  }

  show(profile) {
    this.dispatch()

    if (this.currentRequest) {
      this.currentRequest.abort()
    }

    this.currentRequest = request
      .get(`${config.api.endpoint}/flats`)
      .query({ station: JSON.stringify(profile.location) })
      .query({ roomFrom: profile.rooms.min })
      .query({ roomTo: profile.rooms.max })
      .query({ areaFrom: profile.area.min })
      .query({ areaTo: profile.area.max })
      .query({ priceFrom: profile.price.min })
      .query({ priceTo: profile.price.max })

    this.currentRequest
      .then((response) => {
        this.currentRequest = null;
        this.actions.showCompleted(response.body)
      }).catch((err) => {
        this.currentRequest = null;
        this.actions.showFailed(err)
      })
  }
}

export default alt.createActions(FlatsActions)
