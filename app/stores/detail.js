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
      flatDetails: null,
      error: null,
      loading: true,
      instagramError: null,
      instagramLoading: true,
    })
  }

  onShowCompleted(detail) {
    this.setState({
      flatDetails: detail,
      error: null,
      loading: false,
    })
  }

  onShowFailed(err) {
    console.log('onShowFailed', err)
    this.setState({
      flatDetails: null,
      error: err,
      loading: false,
    })
  }

  onDismiss() {
    this.setState({
      flat: null,
      loading: true, // hack to dismiss modal
    })
  }

  onInstagramCompleted(data) {
    this.setState({
      instagram: data,
      instagramError: null,
      instagramLoading: false,
    })
  }

  onInstagramFailed(err) {
    console.log('onInstagramFailed', err)
    this.setState({
      instagram: null,
      instagramError: err,
      instagramLoading: false,
    })
  }
}

export default alt.createStore(DetailStore)
