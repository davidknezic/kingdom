import React, { PropTypes } from 'react'
import actions from '../actions'
import stores from '../stores'
import alt from 'alt'
import Map from './map'
import Side from './side'
import mui from 'material-ui'
import {Table,TableHeader,TableBody,TableRow,TableHeaderColumn,TableRowColumn,TextField, AppBar} from 'material-ui'

import Welcome from './welcome'

export default class Main extends React.Component {

  constructor() {
    super();

    this.state = {
      locations: stores.locations
    };

    this.onChange = this.onChange.bind(this);

    stores.locations.listen(this.onChange);
  }

  componentWillUnmount() {
    stores.locations.unlisten(this.onChange);
  }

  onChange(store) {
    this.setState({
      locations: store
    })
  }

  _onSearchChange() {
    actions.locations.search(this.refs.searchField.getValue())
  }

  shouldComponentUpdate(newState) {
    return this.state.locations != newState.locations;
  }

  render() {
    return (
      <div className="main">
        <div className="main__sidebar" >
          <AppBar
            title="Hello"
            showMenuIconButton={false} />
        </div>
        <div className="main__map">
          <Map />
        </div>
      </div>
    )
  }
}
