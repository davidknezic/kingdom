import Immutable from 'immutable'
import actions from '../actions'
import alt from '../alt'

class DetailStore {
  constructor() {
    this.bindActions(actions.detail)

    this.state = {
      flat: null
    }
  }

  onShow(flat) {
    this.setState({
      flat: flat
    })
  }

  onDismiss() {
    this.setState({
      flat: null
    })
  }
}

export default alt.createStore(DetailStore)
