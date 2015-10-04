import Immutable from 'immutable'
import actions from '../actions'
import alt from '../alt'

class CoopStore {
  constructor() {
    this.bindActions(actions.coop)
  }

  onSearch(shops) {
    this.setState({
      shops: shops
    })
  }

  onDistance(result) {
    this.setState({
      nearest: result.hit,
      distance: result.distance
    })
  }
}

export default alt.createStore(CoopStore)
