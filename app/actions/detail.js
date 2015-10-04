import alt from '../alt'
import request from './utils/request'

import apiBase from './utils/api-base'

class DetailActions {

  constructor() {
    this.generateActions('instagramCompleted', 'instagramFailed', 'showCompleted', 'showFailed')
  }

  show(flat) {
    this.dispatch(flat)

    if(this.currentInstagramRequest) {
      this.currentInstagramRequest.abort();
    }

    if(this.currentRequest) {
      this.currentRequest.abort();
    }

    var coords = flat.geoLocation.split(',');

    var lng = coords[0];
    var lat = coords[1];

    this.currentRequest = request
      .get(`${apiBase}/flats/${flat.advId}`);

    this.currentRequest
      .then((response) => {
        this.currentRequest = null;
        this.actions.showCompleted(response.body);
      }).catch((err) => {
        this.currentRequest = null;
        this.actions.showFailed(err);
      })

    this.currentInstagramRequest = request
      .get(`${apiBase}/instagram/media/search`)
      .query({'lat': lat})
      .query({'lng': lng});

    this.currentInstagramRequest
      .then((response) => {
        this.currentInstagramRequest = null;
        this.actions.instagramCompleted(response.body)
      }).catch((err) => {
        this.currentInstagramRequest = null;
        this.actions.instagramFailed(err)
      });
  }

  dismiss() {
    this.dispatch()
  }
}

export default alt.createActions(DetailActions)
