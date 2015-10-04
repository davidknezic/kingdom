import alt from '../alt'
import request from './utils/request'

import apiBase from './utils/api-base'

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
      .get(`${apiBase}/flats`);

    console.log(profile.locations)
    for (var i = 0;i < profile.locations.length; i++){
      let station = {
        uic: profile.locations[i].location.uic,
        cntr: profile.locations[i].location.cntr,
        maxTime: profile.locations[i].time
      }

      console.log(station)

      this.currentRequest.query({ station: JSON.stringify(station)})
    }

    this.currentRequest
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
