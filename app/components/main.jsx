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
      detail: stores.detail,
    };

    stores.detail.listen(this.onChangeDetail.bind(this))
  }

  componentWillUnmount() {
    stores.detail.unlisten(this.onChangeDetail)
  }

  onChangeDetail(detail) {
    if (!detail.loading) {
      if(!this.refs.detail.isOpen()) {
        this.refs.detail.show()
      }
    } else if(this.refs.detail.isOpen()) {
      this.refs.detail.dismiss()
    }
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
        <div className="main__dialog">
          <Dialog
            ref="detail"
            autoDetectWindowHeight={true}
            autoScrollBodyContent={true}>
            <div>
              <Detail />
            </div>
          </Dialog>
        </div>
      </div>
    )
  }
}
