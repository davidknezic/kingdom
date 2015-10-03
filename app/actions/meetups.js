import alt from '../alt'
import request from './utils/request'
import config from '../config'

class MeetupsActions {

  constructor() {
    this.generateActions('fetchCompleted', 'fetchFailed')
  }

  fetch(category) {
    this.dispatch(category)

    if(this.currentRequest) {
      this.currentRequest.abort();
    }

    this.currentRequest = request
      .get(`${config.api.endpoint}/meetups/find`)
      .query({'category': category});

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

export default alt.createActions(MeetupsActions)
