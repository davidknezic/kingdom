import React, {PropTypes, Component} from 'react/addons'
import BaseMarkerComponent from './base'

export default class StarMarker extends BaseMarkerComponent {

  render() {
    return (
      <div
        style={this.getMarkerHolderStyle(this.props.size, this.props.origin)}>
        <h1>Hello</h1>
        <svg viewBox="-95 97 48 48">
          <circle fill="#C51162" class="st0" cx="-71" cy="121" r="24"/>
          <path fill="#FFEA00" d="M-70.6 103.2l3.9 12.2c.1.2.2.3.4.3h12.8c.5 0 .6.5.2.8l-10.3 7.5c-.2.1-.2.3-.2.5l3.9 12.2c.2.4-.3.8-.7.5l-10.3-7.5c-.2-.1-.4-.1-.5 0l-10.3 7.5c-.3.2-.9-.1-.7-.5l3.9-12.2c.1-.2 0-.4-.2-.5l-10.3-7.5c-.3-.2-.2-.8.2-.8H-76c.2 0 .4-.2.4-.3l3.9-12.2c.4-.5 1-.5 1.1 0z"/>
        </svg>
      </div>
    )
  }
}
