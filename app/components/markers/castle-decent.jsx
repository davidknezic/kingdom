import React, {PropTypes, Component} from 'react/addons'
import BaseMarkerComponent from './base'
import actions from '../../actions'

export default class CastleDecentMarker extends BaseMarkerComponent {

  static defaultProps = {
    size: { width: 24, height: 24 },
    origin: { x: 0, y: 0 },
  }

  onClick() {
    actions.detail.show(this.props.flat)
  }

  render() {
    return (
      <div
        style={this.getMarkerHolderStyle(this.props.size, this.props.origin)}
        onClick={this.onClick.bind(this)}>
        <svg className="marker marker--small" viewBox="-95 97 48 48">
          <circle className="big" cx="-71" cy="121" r="24"/>
          <circle className="small" cx="-71" cy="121" r="8.5"/>
        </svg>
      </div>
    )
  }
}
