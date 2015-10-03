import React, {PropTypes, Component} from 'react/addons'
import BaseMarkerComponent from './base'

export default class MigrosMarker extends BaseMarkerComponent {

  render() {
    return (
      <div
        style={this.getMarkerHolderStyle(this.props.size, this.props.origin)}>
        <svg className="marker marker--migros" viewBox="-95 97 48 48">
          <path className="bg" d="M-71 144.8c-13.1 0-23.8-10.7-23.8-23.8S-84.1 97.2-71 97.2s23.8 10.7 23.8 23.8-10.7 23.8-23.8 23.8z"/>
          <path className="border" d="M-71 97.5c13 0 23.5 10.5 23.5 23.5S-58 144.5-71 144.5-94.5 134-94.5 121-84 97.5-71 97.5m0-.5c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z"/>
          <path className="symbol" d="M-85.1 108.9h10.4l3.5 15.4 3.7-15.4h10.6v24.2h-5.9v-19.3l-4.1 19.3h-8l-4.5-19.3v19.3h-5.7z"/>
        </svg>
      </div>
    )
  }
}
