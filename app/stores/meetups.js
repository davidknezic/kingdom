import Immutable from 'immutable'
import actions from '../actions'
import alt from '../alt'

class MeetupsStore {
  constructor() {
    this.bindActions(actions.meetups)

    this.state = {
      list: []
    }
  }

  onFetch() {
    this.setState({
      meetups: null,
      erro: null,
      isLoading: true,
    })
  }

  onFetchCompleted(data) {
    this.setState({
      meetups: data,
      isLoading: false,
    })
  }

  onFetchFailed(err) {
    console.log('onFetchFailed', err)
    this.setState({
      error: err,
      isLoading: false,
    })
  }

}

export default alt.createStore(MeetupsStore)
