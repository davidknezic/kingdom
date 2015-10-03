import alt from '../alt'
import config from '../config'

class UserProfileActions {

  constructor() {
    this.generateActions('updateName');
  }
}

export default alt.createActions(UserProfileActions);
