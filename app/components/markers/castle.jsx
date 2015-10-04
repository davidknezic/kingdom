import React, {PropTypes, Component} from 'react/addons'
import BaseMarkerComponent from './base'
import actions from '../../actions'

export default class CastleMarker extends BaseMarkerComponent {

  onClick() {
    actions.detail.show(this.props.flat)
  }

  render() {
    return (
      <div
        style={this.getMarkerHolderStyle(this.props.size, this.props.origin)}
        onClick={this.onClick.bind(this)}>
        <svg className="marker marker--castle" viewBox="-95 97 48 48">
          <path className="bg" d="M-71 144.8c-13.1 0-23.8-10.7-23.8-23.8S-84.1 97.2-71 97.2s23.8 10.7 23.8 23.8-10.7 23.8-23.8 23.8z"/>
          <path className="border" d="M-71 97.5c13 0 23.5 10.5 23.5 23.5S-58 144.5-71 144.5-94.5 134-94.5 121-84 97.5-71 97.5m0-.5c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z"/>
          <path className="symbol" d="M-57.4 106.5v1.9h-1.9v-1.9h-1.9v1.9h-1.9v-1.9H-65V112.2l1.9 1.9v7.5H-65v-1.9h-3.8v1.9h-3.8v-1.9h-3.8v1.9h-1.9V114l1.9-1.9V106.4h-1.9v1.9H-80v-1.9h-1.9v1.9h-1.9v-1.9h-1.9V112.1l1.9 1.9v20.7h9.4V131c0-2.1 1.7-3.8 3.8-3.8s3.8 1.7 3.8 3.8v3.8h9.4V114l1.9-1.9V106.4h-1.9v.1zm-24.5 15.1v-2.8c0-.5.4-.9.9-.9s.9.4.9.9v2.8h-1.8zm20.7 0v-2.8c0-.5.4-.9.9-.9s.9.4.9.9v2.8h-1.8z"/>
        </svg>
      </div>
    )
  }
}
