import alt from '../alt'
import request from './utils/request'
import config from '../config'

class DetailActions {

  constructor() {
    this.generateActions('instagramCompleted', 'instagramFailed')
  }

  show(flat) {
    this.dispatch(flat)

    if(this.currentInstagramRequest) {
      this.currentInstagramRequest.abort();
    }

    this.currentInstagramRequest = request
      .get(`${config.api.endpoint}/instagram/media/search`)
      .query({'lat': flat.lat})
      .query({'lng': flat.lng});

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
