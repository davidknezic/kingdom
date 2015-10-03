import React, {PropTypes, Component} from 'react/addons'
import BaseMarkerComponent from './base'

export default class StarMarker extends BaseMarkerComponent {

  render() {
    return (
      <div
        style={this.getMarkerHolderStyle(this.props.size, this.props.origin)}>
        <svg className="marker marker--star" viewBox="-95 97 48 48">
          <path className="bg" d="M-71 144.8c-13.1 0-23.8-10.7-23.8-23.8S-84.1 97.2-71 97.2s23.8 10.7 23.8 23.8-10.7 23.8-23.8 23.8z"/>
          <path className="border" d="M-71 97.5c13 0 23.5 10.5 23.5 23.5S-58 144.5-71 144.5-94.5 134-94.5 121-84 97.5-71 97.5m0-.5c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z"/>
          <path className="symbol" d="M-70.6 103.2l3.9 12.2c.1.2.2.3.4.3h12.8c.5 0 .6.5.2.8l-10.3 7.5c-.2.1-.2.3-.2.5l3.9 12.2c.2.4-.3.8-.7.5l-10.3-7.5c-.2-.1-.4-.1-.5 0l-10.3 7.5c-.3.2-.9-.1-.7-.5l3.9-12.2c.1-.2 0-.4-.2-.5l-10.3-7.5c-.3-.2-.2-.8.2-.8H-76c.2 0 .4-.2.4-.3l3.9-12.2c.4-.5 1-.5 1.1 0z"/>
        </svg>
      </div>
    )
  }
}
