import React, {PropTypes, Component} from 'react/addons'
import shouldPureComponentUpdate from 'react-pure-render/function'
import stores from '../stores'
import _ from 'lodash'

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

  constructor() {
    super();

    this.state = {
      flats: stores.flats.getState(),
    };

    stores.flats.listen(this.onChangeFlats.bind(this))
  }

  componentWillUnmount() {
    stores.flats.unlisten(this.onChangeFlats)
  }

  onChangeFlats() {
    this.state = {
      flats: stores.flats.getState(),
    };
  }

  onBoundsChange(center, zoom, bounds, marginBounds) {
    console.log('bounds change', center, zoom)
  }

  render() {
    return (
       <GoogleMap
         containerProps={{...this.props}}
         ref='map'
         center={this.props.center}
         zoom={this.props.zoom}
         onBoundsChange={this.onBoundsChange}>

         {_.map(this.state.flats.list, (flat) => {
           let coords = flat.geoLocation.split(',')
           let lat = parseFloat(coords[1])
           let lng = parseFloat(coords[0])

           return (
             <CastleMarker flat={flat} lat={lat} lng={lng} />
           )
         })}
      </GoogleMap>
    )
  }
}

/*
<CastleDecentMarker title={title} lat={47.498820} lng={8.523689} />
<StarMarker title={title} lat={47.00696} lng={8.70872} />
<CoopMarker title={title} lat={46.70696} lng={8.70872} />
<MigrosMarker title={title} lat={48.20696} lng={8.70872} />
*/
