import Immutable from 'immutable'
import actions from '../actions'
import alt from '../alt';

class UserProfileStore {
  constructor() {
    this.bindActions(actions.userProfile);

    this.state = {
      name: ''
    };
  }

  onUpdateName(name) {
    this.setState({
      name: name
    })
  }

  output(state) {
    return Immutable.fromJS(state);
  }
}

export default alt.createStore(UserProfileStore);
