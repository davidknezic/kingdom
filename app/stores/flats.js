import Immutable from 'immutable'
import actions from '../actions'
import alt from '../alt'

class FlatsStore {
  constructor() {
    this.bindActions(actions.flats)

    this.state = {
      list: []
    }
  }

  output(state) {
    return Immutable.fromJS(state)
  }
}

export default alt.createStore(FlatsStore)
