import Immutable from 'immutable'
import actions from '../actions'
import alt from '../alt';

class UserProfileStore {
  constructor() {
    this.bindActions(actions.userProfile);

    this.state = {
      name: '',
      numberOfPeople: 1,
      sizePreference: '',
      stairsPreference: ''
    };
  }

  onUpdateName(name) {
    this.setState({
      name: name,
      numberOfPeople: this.state.numberOfPeople,
      sizePreference: this.state.sizePreference,
      stairsPreference: this.state.stairsPreference
    })
  }

  onUpdateNumberOfPeople(count) {
    this.setState({
      name: this.state.name,
      numberOfPeople: count,
      sizePreference: this.state.sizePreference,
      stairsPreference: this.state.stairsPreference
    })
  }

  onUpdateSizePreference(preference) {
    this.setState({
      name: this.state.name,
      numberOfPeople: this.state.numberOfPeople,
      sizePreference: preference,
      stairsPreference: this.state.stairsPreference
    })
  }

  onUpdateStairsPreference(preference) {
    this.setState({
      name: this.state.name,
      numberOfPeople: this.state.numberOfPeople,
      sizePreference: this.state.sizePreference,
      stairsPreference: preference
    })
  }

  //output(state) {
  //  return Immutable.fromJS(state);
  //}
}

export default alt.createStore(UserProfileStore);
