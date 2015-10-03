import React, {PropTypes, Component} from 'react/addons'
import BaseMarkerComponent from './base'

export default class CastleDecentMarker extends BaseMarkerComponent {

  onClick() {
    console.log('clicked')
  }

  render() {
    return (
      <div
        style={this.getMarkerHolderStyle(this.props.size, this.props.origin)}
        onClick={this.onClick}>
        <h1>Hello</h1>
        <svg viewBox="-95 97 48 48">
          <circle fill="#00E676" class="st0" cx="-71" cy="121" r="24"/>
          <circle fill="#37474F" class="st1" cx="-71" cy="121" r="8.5"/>
        </svg>
      </div>
    )
  }
}
