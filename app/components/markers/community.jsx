import React, {PropTypes, Component} from 'react/addons'
import BaseMarkerComponent from './base'

export default class CommunityMarker extends BaseMarkerComponent {

  render() {
    return (
      <div
        style={this.getMarkerHolderStyle(this.props.size, this.props.origin)}>
        <svg className="marker marker--community" viewBox="-95 97 48 48">
          <path className="bg" d="M-71 144.8c-13.1 0-23.8-10.7-23.8-23.8S-84.1 97.2-71 97.2s23.8 10.7 23.8 23.8-10.7 23.8-23.8 23.8z"/>
          <path className="border" d="M-71 97.5c13 0 23.5 10.5 23.5 23.5S-58 144.5-71 144.5-94.5 134-94.5 121-84 97.5-71 97.5m0-.5c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z"/>
          <path className="shape" d="M-78.4 128.4c-2-1.1-2.1-4.3-.6-7.8-.8.4-1.6.7-2.6.7-1.2 0-2.2-.4-3.1-1-.8.6-1.5 1.5-2.1 2.6-1.4 2.6-1.6 5.2-.4 5.9.6.3 1.1.1 1.7-.5-.1.6-.2 1.2-.2 1.9 0 3 1.1 5.4 2.6 5.4.9 0 1.3-.9 1.5-2.2.2 1.3.6 2.2 1.5 2.2 1.4 0 2.6-2.4 2.6-5.4 0-.5 0-1-.1-1.5-.3-.1-.6-.1-.8-.3zm-3.2-8.1c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3-4.3 1.9-4.3 4.3c0 2.3 2 4.3 4.3 4.3zm26.4 2.6c-.6-1.1-1.4-2-2.1-2.6-.9.6-2 1-3.1 1-.9 0-1.8-.3-2.6-.7.6 1.3 1 2.7 1.1 3.9.1 1.9-.5 3.2-1.6 3.9-.2.1-.5.2-.8.3-.1.5-.1 1-.1 1.5 0 3 1.2 5.4 2.6 5.4.9 0 1.3-.9 1.5-2.2.2 1.3.6 2.2 1.5 2.2 1.4 0 2.6-2.4 2.6-5.4 0-.7-.1-1.3-.2-1.9.6.6 1.2.8 1.7.5 1.1-.7.9-3.3-.5-5.9zm-5.2-2.6c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3-4.3 1.9-4.3 4.3c-.1 2.3 1.9 4.3 4.3 4.3zm-10.6-3.4c2.9 0 5.3-2.4 5.3-5.3s-2.4-5.3-5.3-5.3-5.3 2.4-5.3 5.3c0 3 2.4 5.3 5.3 5.3zm6.8 10.4c1.5-.8 1.3-4.1-.4-7.2-.7-1.4-1.7-2.5-2.6-3.2-1.1.8-2.4 1.3-3.8 1.3s-2.7-.5-3.8-1.3c-.9.8-1.8 1.9-2.6 3.2-1.7 3.1-1.9 6.4-.4 7.2.7.4 1.4.1 2.1-.6-.1.7-.2 1.5-.2 2.3 0 3.6 1.4 6.5 3.1 6.5 1 0 1.6-1 1.8-2.7.2 1.6.8 2.7 1.8 2.7 1.7 0 3.1-2.9 3.1-6.5 0-.8-.1-1.6-.2-2.3.7.7 1.5 1 2.1.6z"/>
        </svg>
      </div>
    )
  }
}
