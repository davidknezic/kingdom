import React, {PropTypes, Component} from 'react/addons';
import shouldPureComponentUpdate from 'react-pure-render/function';

export default class BaseMarker extends React.Component {

  static defaultProps = {
    size: { width: 62, height: 60 },
    origin: { x: 15 / 62, y: 1 },
  }

  shouldComponentUpdate = shouldPureComponentUpdate

  getMarkerHolderStyle(size, origin) {
    const left = -size.width * origin.x
    const top = -size.height * origin.y

    return {
      position: 'absolute',
      width: size.width,
      height: size.height,
      left: left,
      top: top,
      cursor: 'pointer'
    }
  }
}
