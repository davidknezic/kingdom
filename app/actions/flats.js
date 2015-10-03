import alt from '../alt'
import request from './utils/request'
import config from '../config'

class FlatsActions {

  constructor() {
    this.generateActions()
  }
}

export default alt.createActions(FlatsActions)
