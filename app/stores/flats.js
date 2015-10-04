import Immutable from 'immutable'
import actions from '../actions'
import stores from '../stores'
import alt from '../alt'

class FlatsStore {
  constructor() {
    this.bindActions(actions.flats)

    this.state = {
      list: [],
      erro: null,
      isLoading: false,
    }
  }

  onShow() {
    this.setState({
      list: [],
      erro: null,
      isLoading: true,
    })
  }

  onShowCompleted(list) {
    this.setState({
      list: list.hits,
      erro: null,
      isLoading: false,
    })
  }

  onShowFailed(err) {
    this.setState({
      list: [],
      erro: err,
      isLoading: false,
    })
  }
}

export default alt.createStore(FlatsStore)
