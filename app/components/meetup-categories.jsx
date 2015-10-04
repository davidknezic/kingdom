import React, { PropTypes } from 'react'
import actions from '../actions'
import stores from '../stores'

import Loading from './loading'

import { FlatButton } from 'material-ui'

export default class MeetupCategories extends React.Component {

  constructor(props) {
    super(props);

    actions.meetupCategories.fetch();

    this.onChange = this.onChange.bind(this);

    this.state = {
      categories: stores.meetupCategories.getState()
    }

    stores.meetupCategories.listen(this.onChange);
  }

  componentWillUnmount() {
    stores.meetupCategories.unlisten(this.onChange);
  }

  onChange() {
    this.setState({
      categories: stores.meetupCategories.getState()
    })
  }

  _onCategoryClick(cat) {
    actions.meetups.fetch(cat.id);
  }

  render() {

    if(this.state.categories.isLoading || !this.state.categories.categories) {
      return <Loading />
    }

    if(this.state.categories.error) {
      return <div>error</div>
    }

    return (
      <div className="meetups">
        {
          this.state.categories.categories.map((category) => {
            return (
              <div className="meetups__meetup" >
                <FlatButton onClick={this._onCategoryClick.bind(this, category)} >{category.name}</FlatButton>

              </div>
            )
          })
        }
      </div>
    )
  }

}
