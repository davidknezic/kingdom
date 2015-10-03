import Immutable from 'immutable'
import actions from '../actions'
import alt from '../alt'

class LocationsStore {
  constructor() {
    this.bindActions(actions.locations)

    this.state = {
      stations: [],
      error: null,
      isLoading: false,
    }
  }

  onFetch() {
    this.setState({
      stations: [],
      error: null,
      isLoading: true,
    })
  }

  onFetchCompleted(data) {
    this.setState({
      stations: data.stations,
      isLoading: false,
    })
  }

  onFetchFailed(err) {
    this.setState({
      stations: [],
      error: err,
      isLoading: false,
    })
  }

}

export default alt.createStore(LocationsStore)
