import alt from '../alt'
import request from './utils/request'
import config from '../config'

class NewPanelActions {

  constructor() {
    this.generateActions('updateLocation', 'updateTime')
  }

  show() {
    this.dispatch()
  }

  dismiss() {
    this.dispatch()
  }

  setCategory(lolcat) {
    this.dispatch(lolcat)
  }
}

export default alt.createActions(NewPanelActions)
