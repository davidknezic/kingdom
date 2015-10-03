import React, { PropTypes } from 'react'
import actions from '../actions'
import stores from '../stores'
import alt from 'alt'
import Map from './map'
import Sidebar from './sidebar'
import Detail from './detail'
import mui from 'material-ui'
import {Dialog, Table,TableHeader,TableBody,TableRow,TableHeaderColumn,TableRowColumn,TextField, AppBar} from 'material-ui'
import classNames from 'classnames'

export default class Main extends React.Component {

  constructor() {
    super();

    this.state = {
      locations: stores.locations,
      detail: stores.detail,
    };

    this.onChange = this.onChange.bind(this)

    stores.locations.listen(this.onChange)
    stores.detail.listen(this.onChangeDetail.bind(this))
  }

  componentWillUnmount() {
    stores.locations.unlisten(this.onChange)
    stores.detail.unlisten(this.onChangeDetail)
  }

  onChange(store) {
    this.setState({
      locations: store
    })
  }

  onChangeDetail(detail) {
    var toggle = null

    if (detail.flat != null) {
      toggle = this.refs.detail.show
    } else {
      toggle = this.refs.detail.dismiss
    }

    toggle()
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
          <Sidebar />
        </div>
        <div className="main__map">
          <Map />
        </div>
        <Dialog
          ref="detail"
          title="Flat"
          autoDetectWindowHeight={true}
          autoScrollBodyContent={true}>
          <div style={{height: '2000px'}}>
            <Detail />
          </div>
        </Dialog>
      </div>
    )
  }
}
