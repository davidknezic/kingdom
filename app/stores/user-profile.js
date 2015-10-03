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
      location: {},

      area: {
        min: null,
        max: null
      },

      rooms: {
        min: null,
        max: null
      },
    }
  }

  onUpdateName(name) {
    this.setState({
      name: name,
      numberOfPeople: this.state.numberOfPeople,
      sizePreference: this.state.sizePreference,
      stairsPreference: this.state.stairsPreference,
      priceIllusions: this.state.priceIllusions,
      location: this.state.location,
      area: this.state.area,
      rooms: this.state.rooms,
    })
  }

  onUpdateNumberOfPeople(count) {
    let minRooms = count + 0.5
    let maxRooms = minRooms + 1

    this.setState({
      name: this.state.name,
      numberOfPeople: count,
      sizePreference: this.state.sizePreference,
      stairsPreference: this.state.stairsPreference,
      priceIllusions: this.state.priceIllusions,
      location: this.state.location,
      area: this.state.area,
      rooms: {
        min: minRooms,
        max: maxRooms
      }
    })
  }

  onUpdateSizePreference(preference) {
    var minArea = null
    var maxArea = null

    if (preference == 'cozy') {
      minArea = 30 + this.state.numberOfPeople * 20
      maxArea = null
    } else if (preference == 'spacey') {
      minArea = 50 + this.state.numberOfPeople * 25
      maxArea = null
    }

    this.setState({
      name: this.state.name,
      numberOfPeople: this.state.numberOfPeople,
      sizePreference: preference,
      stairsPreference: this.state.stairsPreference,
      priceIllusions: this.state.priceIllusions,
      location: this.state.location,
      area: {
        min: minArea,
        max: maxArea
      },
      rooms: this.state.rooms,
    })
  }

  onUpdateStairsPreference(preference) {
    if (preference == 'rage') {
    } else if (preference == 'workout') {
    }

    this.setState({
      name: this.state.name,
      numberOfPeople: this.state.numberOfPeople,
      sizePreference: this.state.sizePreference,
      stairsPreference: preference,
      priceIllusions: this.state.priceIllusions,
      location: this.state.location,
      area: this.state.area,
      rooms: this.state.rooms,
    })
  }

  onUpdatePriceIllusions(illusions) {
    if (preference == 'low') {
    } else if (preference == 'mid') {
    } else if (preference == 'high') {
    }

    this.setState({
      name: this.state.name,
      numberOfPeople: this.state.numberOfPeople,
      sizePreference: this.state.sizePreference,
      stairsPreference: this.state.stairsPreference,
      priceIllusions: illusions,
      location: this.state.location,
      area: this.state.area,
      rooms: this.state.rooms,
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
      area: this.state.area,
      rooms: this.state.rooms,
    })
  }
}

export default alt.createStore(UserProfileStore)
