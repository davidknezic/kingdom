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

      price: {
        min: null,
        max: null
      }
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
      price: this.state.price,
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
      },
      price: this.state.price,
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
      price: this.state.price,
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
      price: this.state.price,
    })
  }

  onUpdatePriceIllusions(illusions) {
    var tmpPrice;
    if (illusions == 'low') {
      tmpPrice = illusions * 0.8
    } else if (illusions == 'mid') {
      tmpPrice = illusions
    } else if (illusions == 'high') {
      tmpPrice = illusions * 1.2
    }

    let minPrice = tmpPrice * 0.7
    let maxPrice = tmpPrice * 1.1

    this.setState({
      name: this.state.name,
      numberOfPeople: this.state.numberOfPeople,
      sizePreference: this.state.sizePreference,
      stairsPreference: this.state.stairsPreference,
      priceIllusions: illusions,
      location: this.state.location,
      area: this.state.area,
      rooms: this.state.rooms,
      price: {
        min: minPrice,
        max: maxPrice
      },
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
      price: this.state.price,
    })
  }
}

export default alt.createStore(UserProfileStore)
