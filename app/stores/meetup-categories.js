import Immutable from 'immutable'
import actions from '../actions'
import alt from '../alt'

class MeetupCategoriesStore {
  constructor() {
    this.bindActions(actions.meetupCategories)

    this.state = {
      list: []
    }
  }

  onFetch() {
    this.setState({
      categories: null,
      erro: null,
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
    console.log('onFetchFailed', err)
    this.setState({
      error: err,
      isLoading: false,
    })
  }

}

export default alt.createStore(MeetupCategoriesStore)
