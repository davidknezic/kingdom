import alt from '../alt'
import request from './utils/request'
import config from '../config'

var currentRequest = null;

class LocationsActions {

  constructor() {
    this.generateActions('searchCompleted', 'searchFailed');
  }

  search(query) {

    if(currentRequest) {
      currentRequest.abort();
    }

    this.dispatch();

    currentRequest = request
      .get(`${config.transportApi.endpoint}/locations`)
      .query({'query': query});

    currentRequest
      .then((response) => {
        currentRequest = null;
        this.actions.searchCompleted(response.body)
      }).catch((err) => {
        currentRequest = null;
        this.actions.searchFailed(err)
      });
  }

}

export default alt.createActions(LocationsActions);
