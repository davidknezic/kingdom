import Immutable from 'immutable'
import actions from '../actions'
import alt from '../alt';

class LocationsStore {
  constructor() {
    this.bindActions(actions.locations);
  }

  onSearch() {
    this.setState({
      stations: null,
    })
  }

  onSearchCompleted(locations) {
    this.setState({
      stations: locations.stations,
    })
  }

  onSearchFailed(error) {
    this.setState({
      error: error,
    })
  }

  output(state) {
    return Immutable.fromJS(state);
  }

}

export default alt.createStore(LocationsStore);
