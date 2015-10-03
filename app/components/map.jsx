import React, {PropTypes, Component} from 'react/addons'
import shouldPureComponentUpdate from 'react-pure-render/function'

import GoogleMap from 'google-map-react'
import FlatMarker from './markers/flat'
import BriefcaseMarker from './markers/briefcase'

export default class Map extends Component {

  static defaultProps = {
    center: [59.938043, 30.337157],
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  }

  shouldComponentUpdate = shouldPureComponentUpdate

  constructor(props) {
    super(props)
  }

  render() {
    return (
       <GoogleMap
         containerProps={{...this.props}}
         ref='map'
         center={this.props.center}
         zoom={this.props.zoom}>
        <FlatMarker lat={59.955413} lng={30.337844} text={'A'} />
        <BriefcaseMarker {...this.props.greatPlaceCoords} text={'B'} />
      </GoogleMap>
    )
  }
}
