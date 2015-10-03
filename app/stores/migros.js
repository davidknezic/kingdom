import Immutable from 'immutable'
import actions from '../actions'
import alt from '../alt'

class MigrosStore {
  constructor() {
    this.bindActions(actions.migros)
  }

  onSearch(shops) {
    this.setState({
      shops: shops
    })
  }

  output(state) {
    return Immutable.fromJS(state)
  }
}

export default alt.createStore(MigrosStore)
