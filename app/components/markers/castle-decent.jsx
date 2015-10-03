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
        <svg className="marker marker--small" viewBox="-95 97 48 48">
          <circle className="big" cx="-71" cy="121" r="24"/>
          <circle className="small" cx="-71" cy="121" r="8.5"/>
        </svg>
      </div>
    )
  }
}
