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
}

export default alt.createStore(MigrosStore)
