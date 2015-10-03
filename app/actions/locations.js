import alt from '../alt'
import request from './utils/request'
import config from '../config'

class LocationsActions {

  constructor() {
    this.generateActions('fetchCompleted', 'fetchFailed')
  }

  fetch(queryString) {
    this.dispatch(queryString)

    if(this.currentRequest) {
      this.currentRequest.abort();
    }

    this.currentRequest = request
      .get(`${config.api.endpoint}/stations`)
      .query({'query': queryString});

    this.currentRequest
      .then((response) => {
        this.currentRequest = null;
        this.actions.fetchCompleted(response.body)
      }).catch((err) => {
        this.currentRequest = null;
        this.actions.fetchFailed(err)
      });
  }
}

export default alt.createActions(LocationsActions)
