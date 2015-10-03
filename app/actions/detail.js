import alt from '../alt'
import request from './utils/request'
import config from '../config'

class DetailActions {

  constructor() {
    this.generateActions()
  }

  show(flat) {
    this.dispatch(flat)
  }

  dismiss() {
    this.dispatch()
  }
}

export default alt.createActions(DetailActions)
