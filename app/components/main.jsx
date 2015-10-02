import React, { PropTypes } from 'react'
import actions from '../actions'
import stores from '../stores'
import alt from 'alt'
import mui from 'material-ui'
import {Table,TableHeader,TableBody,TableRow,TableHeaderColumn,TableRowColumn,TextField} from 'material-ui'

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
      <main id="main-container">
        <TextField
          hintText="Search text"
          ref="searchField"
          onChange={this._onSearchChange.bind(this)} />
        {() => {
          if(this.state.locations) {
            return (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Score</TableHeaderColumn>
                    <TableHeaderColumn>coordinate</TableHeaderColumn>
                    <TableHeaderColumn>distance</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {this.state.locations.stations ? this.state.locations.stations.map((station) => {
                    return (
                      <TableRow selected={true} key={station.name}>
                        <TableRowColumn>{station.name}</TableRowColumn>
                        <TableRowColumn>{station.score}</TableRowColumn>
                        <TableRowColumn>{station.coordinate.x} / {station.coordinate.y}</TableRowColumn>
                        <TableRowColumn>{station.distance}</TableRowColumn>
                      </TableRow>
                    )
                  }) : null}
                </TableBody>
              </Table>
            )
          } else {
            return (<div>...</div>)
          }
        }()}
      </main>
    )
  }

}
