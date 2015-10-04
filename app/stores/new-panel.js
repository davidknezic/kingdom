import Immutable from 'immutable'
import actions from '../actions'
import alt from '../alt'

class NewPanelStore {
  constructor() {
    this.bindActions(actions.newPanel)

    this.state = {
      category: null,
      show: null,
      location: {},
      time: {},
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

  onSetCategory(cat) {
    this.setState({
      category: cat
    })
  }

  onUpdateLocation(location) {
    this.setState({
      location: location
    })
  }

  onUpdateTime(time) {
    this.setState({
      time: time
    })
  }
}

export default alt.createStore(NewPanelStore)
