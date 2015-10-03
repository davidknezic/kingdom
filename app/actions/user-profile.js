import alt from '../alt'
import config from '../config'

class UserProfileActions {

  constructor() {
    this.generateActions('updateName',
      'updateNumberOfPeople',
      'updateSizePreference',
      'updateStairsPreference',
      'updatePriceIllusions'
    )
  }
}

export default alt.createActions(UserProfileActions);
