import alt from '../alt'
import config from '../config'

class ProcessActions {

  constructor() {
    this.generateActions('updateProcessState');
  }
}

export default alt.createActions(ProcessActions);
