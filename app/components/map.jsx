import React, {PropTypes, Component} from 'react/addons'
import shouldPureComponentUpdate from 'react-pure-render/function'

import GoogleMap from 'google-map-react'

import CastleMarker from './markers/castle'
import CastleDecentMarker from './markers/castle-decent'
import StarMarker from './markers/star'
import CoopMarker from './markers/coop'
import MigrosMarker from './markers/migros'

export default class Map extends Component {

  static defaultProps = {
    center: [46.86519534, 8.37823366],
    zoom: 8
  }

  shouldComponentUpdate = shouldPureComponentUpdate

  constructor(props) {
    super(props)
  }

  onBoundsChange(center, zoom, bounds, marginBounds) {
    console.log('bounds change', center, zoom)
  }

  render() {
    let title = "reiughri"

    return (
       <GoogleMap
         containerProps={{...this.props}}
         ref='map'
         center={this.props.center}
         zoom={this.props.zoom}
         onBoundsChange={this.onBoundsChange}>

        <CastleMarker title={title} lat={47.498820} lng={9.723689} />
        <CastleDecentMarker title={title} lat={47.498820} lng={8.523689} />
        <StarMarker title={title} lat={47.00696} lng={8.70872} />
        <CoopMarker title={title} lat={46.70696} lng={8.70872} />
        <MigrosMarker title={title} lat={48.20696} lng={8.70872} />
      </GoogleMap>
    )
  }
}
