import Immutable from 'immutable'
import actions from '../actions'
import alt from '../alt'

class MeetupCategoriesStore {
  constructor() {
    this.bindActions(actions.meetupCategories)

    this.state = {
      categories: null,
      error: null,
      isLoading: true,
    }
  }

  onFetch() {
    this.setState({
      categories: null,
      error: null,
      isLoading: true,
    })
  }

  onFetchCompleted(data) {
    this.setState({
      categories: data,
      isLoading: false,
    })
  }

  onFetchFailed(err) {
    this.setState({
      error: err,
      isLoading: false,
    })
  }

}

export default alt.createStore(MeetupCategoriesStore)
