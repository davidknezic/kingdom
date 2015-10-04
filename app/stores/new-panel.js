import Immutable from 'immutable'
import actions from '../actions'
import alt from '../alt'

class NewPanelStore {
  constructor() {
    this.bindActions(actions.newPanel)

    this.state = {
      category: null,
      show: null
    }
  }

  onShow() {
    this.setState({
      show: true
    })
  }

  onDismiss() {
    this.setState({
      show: false, // hack to dismiss modal
    })
  }

  onShowDistance() {
    this.setState({
      category: 'distance'
    })
  }
}

export default alt.createStore(NewPanelStore)
