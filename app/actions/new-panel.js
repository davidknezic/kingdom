import alt from '../alt'
import request from './utils/request'
import config from '../config'

class NewPanelActions {

  // constructor() {
  //   this.generateActions('instagramCompleted', 'instagramFailed', 'showCompleted', 'showFailed')
  // }

  show() {
    this.dispatch()
  }

  dismiss() {
    this.dispatch()
  }

  showDistance() {
    this.dispatch()
  }
}

export default alt.createActions(NewPanelActions)
