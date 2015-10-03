import React, {PropTypes, Component} from 'react/addons';
import shouldPureComponentUpdate from 'react-pure-render/function';


export default class FlatMarker extends React.Component {

  static defaultProps = {
    size: {width: 62, height: 60},
    origin: {x: 15 / 62, y: 1},
  }

  shouldComponentUpdate = shouldPureComponentUpdate

  constructor(props) {
    super(props)
  }

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

  onClick() {
    console.log('clicked')
  }

  render() {
    return (
      <div
        style={this.getMarkerHolderStyle(this.props.size, this.props.origin)}
        onClick={this.onClick}>
        <h1>Hello</h1>
        <svg viewBox="0 0 512 512">
          <path d="M480 16v32h-32V16h-32v32h-32V16h-32v96l32 32v128h-32v-32h-64v32h-64v-32h-64v32h-32V144l32-32V16h-32v32H96V16H64v32H32V16H0v96l32 32v352h160v-64c0-35.375 28.656-64 64-64s64 28.625 64 64v64h160V144l32-32V16h-32zM64 272v-48c0-8.875 7.156-16 16-16s16 7.125 16 16v48H64zm352 0v-48c0-8.875 7.156-16 16-16s16 7.125 16 16v48h-32z"/>
        </svg>
      </div>
    )
  }
}
