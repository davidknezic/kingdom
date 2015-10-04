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
      locations: [],
      defaultLocation: {},
      defaultTime: {},

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
      },
      store: '',
    }
  }

  onUpdateName(name) {
    this.setState({
      name: name,
    })
  }

  onUpdateNumberOfPeople(count) {
    let minRooms = count + 0.5
    let maxRooms = minRooms + 1

    this.setState({
      numberOfPeople: count,
      rooms: {
        min: minRooms,
        max: maxRooms
      },
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
      sizePreference: preference,
      area: {
        min: minArea,
        max: maxArea
      },
    })
  }

  onUpdateStairsPreference(preference) {
    if (preference == 'rage') {
    } else if (preference == 'workout') {
    }

    this.setState({
      stairsPreference: preference,
    })
  }

  onUpdatePriceIllusions(illusions) {
    var basePrice = this.state.sizePreference == 'cozy' ? (30 + this.state.numberOfPeople*20)*18 : (50 + this.state.numberOfPeople*25)*18
    var tmpPrice;
    if (illusions == 'low') {
      tmpPrice = basePrice * 0.8
    } else if (illusions == 'mid') {
      tmpPrice = basePrice
    } else if (illusions == 'high') {
      tmpPrice = basePrice * 1.2
    }

    let minPrice = tmpPrice * 0.7
    let maxPrice = tmpPrice * 1.1

    this.setState({
      priceIllusions: illusions,
      price: {
        min: minPrice,
        max: maxPrice
      },
    })
  }

  onUpdateDefaultLocation(location) {
    this.setState({
      defaultLocation: location
    })
  }

  onUpdateDefaultTime(time) {
    this.setState({
      defaultTime: time,
      locations: this.state.locations.concat({ location: this.state.defaultLocation, time: this.state.defaultTime })
    })
  }

  onAddLocationTime(locationTime) {
    this.setState({
      locations: this.state.locations.concat(locationTime)
    })
  }

  onUpdateStore(store) {
    this.setState({
      store: store,
    })
  }
}

export default alt.createStore(UserProfileStore)
