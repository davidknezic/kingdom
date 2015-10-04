import alt from '../alt'
import request from './utils/request'

import apiBase from './utils/api-base'

class MeetupCategoriesActions {

  constructor() {
    this.generateActions('fetchCompleted', 'fetchFailed')
  }

  fetch() {
    this.dispatch()

    if(this.currentRequest) {
      this.currentRequest.abort();
    }

    this.currentRequest = request
      .get(`${apiBase}/meetups/categories`);

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

export default alt.createActions(MeetupCategoriesActions)
