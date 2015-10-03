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
      list: null,
      erro: null,
      isLoading: true,
    })
  }

  onShowCompleted(flats) {
    this.setState({
      list: flats,
      erro: null,
      isLoading: false,
    })

    actions.process.updateProcessState('showResults')
  }

  onShowFailed(err) {
    console.log('onShowFailed', err)
    this.setState({
      categories: null,
      erro: err,
      isLoading: false,
    })
  }
}

export default alt.createStore(FlatsStore)
