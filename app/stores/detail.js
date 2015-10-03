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
      flat: flat,
      instagramLoading: true,
    })
  }

  onDismiss() {
    this.setState({
      flat: null
    })
  }

  onInstagramCompleted(data) {
    this.setState({
      instagram: data,
      instagramLoading: false,
    })
  }

  onInstagramFailed(err) {
    this.setState({
      instagramError: err,
      instagramLoading: false,
    })
  }
}

export default alt.createStore(DetailStore)
