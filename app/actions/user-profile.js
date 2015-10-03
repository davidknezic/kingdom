import alt from '../alt'
import config from '../config'

class UserProfileActions {

  constructor() {
    this.generateActions('updateName',
      'updateNumberOfPeople',
      'updateSizePreference',
      'updateStairsPreference',
      'updatePriceIllusions',
      'updateLocation'
    )
  }
}

export default alt.createActions(UserProfileActions);
