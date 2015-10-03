import React, {PropTypes, Component} from 'react/addons';
import BaseMarkerComponent from './base'

export default class BriefcaseMarker extends BaseMarkerComponent {

  onClick() {
    console.log('clicked')
  }

  render() {
    return (
      <div
        style={this.getMarkerHolderStyle(this.props.size, this.props.origin)}
        onClick={this.onClick}>
        <svg viewBox="0 0 100 100">
          <path d="M32 12.875c-2.493 0-4.5 2.007-4.5 4.5v9h-18c-.65 0-1.27.14-1.828.387L20.61 54.5h58.78l12.94-27.738c-.558-.247-1.177-.387-1.828-.387h-18v-9c0-2.493-2.007-4.5-4.5-4.5H32zm4.5 6.75h27v6.75h-27v-6.75zM5 31.685v50.94c0 2.493 2.007 4.5 4.5 4.5h81c2.493 0 4.5-2.007 4.5-4.5v-50.94L82.87 57.698a2.25 2.25 0 0 1-2.038 1.3H55.625v4.5c0 1.247-1.004 2.25-2.25 2.25h-6.75c-1.246 0-2.25-1.003-2.25-2.25V59H19.168a2.25 2.25 0 0 1-2.04-1.3L5 31.683z" overflow="visible" fill-rule="evenodd"/>
        </svg>
      </div>
    )
  }
}
