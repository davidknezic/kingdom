import alt from '../alt'
import config from '../config'

class UserProfileActions {

  constructor() {
    this.generateActions('updateName', 'updateNumberOfPeople', 'updateSizePreference')
  }
}

export default alt.createActions(UserProfileActions);
