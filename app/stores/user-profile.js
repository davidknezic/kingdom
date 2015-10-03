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
      stairsPreference: '',
      priceIllusions: '',
      location: {}
    };
  }

  onUpdateName(name) {
    this.setState({
      name: name,
      numberOfPeople: this.state.numberOfPeople,
      sizePreference: this.state.sizePreference,
      stairsPreference: this.state.stairsPreference,
      priceIllusions: this.state.priceIllusions,
      location: this.state.location,
    })
  }

  onUpdateNumberOfPeople(count) {
    this.setState({
      name: this.state.name,
      numberOfPeople: count,
      sizePreference: this.state.sizePreference,
      stairsPreference: this.state.stairsPreference,
      priceIllusions: this.state.priceIllusions,
      location: this.state.location,
    })
  }

  onUpdateSizePreference(preference) {
    this.setState({
      name: this.state.name,
      numberOfPeople: this.state.numberOfPeople,
      sizePreference: preference,
      stairsPreference: this.state.stairsPreference,
      priceIllusions: this.state.priceIllusions,
      location: this.state.location,
    })
  }

  onUpdateStairsPreference(preference) {
    this.setState({
      name: this.state.name,
      numberOfPeople: this.state.numberOfPeople,
      sizePreference: this.state.sizePreference,
      stairsPreference: preference,
      priceIllusions: this.state.priceIllusions,
      location: this.state.location,
    })
  }

  onUpdatePriceIllusions(illusions) {
    this.setState({
      name: this.state.name,
      numberOfPeople: this.state.numberOfPeople,
      sizePreference: this.state.sizePreference,
      stairsPreference: this.state.stairsPreference,
      priceIllusions: illusions,
      location: this.state.location,
    })
  }

  onUpdateLocation(location) {
    this.setState({
      name: this.state.name,
      numberOfPeople: this.state.numberOfPeople,
      sizePreference: this.state.sizePreference,
      stairsPreference: this.state.stairsPreference,
      priceIllusions: this.state.priceIllusions,
      location: location,
    })
  }

  //output(state) {
  //  return Immutable.fromJS(state);
  //}
}

export default alt.createStore(UserProfileStore);
