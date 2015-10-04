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

  shouldComponentUpdate = shouldPureComponentUpdate

  constructor() {
    super();

    var flats = stores.flats.getState()

    this.state = {
      flats: flats,
      center: [46.86519534, 8.37823366],
      zoom: 8,
    };

    stores.flats.listen(this.onChangeFlats.bind(this))
  }

  componentDidMount() {

    setTimeout(() => {

      var flats = stores.flats.getState()

      var markers = this._getMarkers(flats.list)

      this.setState(this._getZoomAndCenter(markers))

    }, 1)
  }

  _getMarkers(flats) {
    return flats.map((flat) => {
      var loc = flat.geoLocation.split(",");
      return {
        "latitude": parseFloat(loc[1]),
        "longitude": parseFloat(loc[0])
      }
    });
  }

  _getZoomAndCenter(markers) {
    var maps = this.refs.map.maps_
    var map = this.refs.map.map_

    var bounds = new maps.LatLngBounds();

    for(var i = 0; i < markers.length; i++){
      bounds.extend(new maps.LatLng(markers[i].latitude, markers[i].longitude));
    }

    map.fitBounds(bounds);

    return {
      center: map.getCenter(),
      zoom: map.getZoom()
    }
  }

  componentWillUnmount() {
    stores.flats.unlisten(this.onChangeFlats)
  }

  onChangeFlats() {

    var flats = stores.flats.getState()

    var markers = this._getMarkers(flats.list)

    this.setState({
      flats: flats,
    })
    this.setState(this._getZoomAndCenter(markers))

  }

  onBoundsChange(center, zoom, bounds, marginBounds) {
    console.log('bounds change', center, zoom)
  }

  render() {
    return (
       <GoogleMap
         containerProps={{...this.props}}
         ref='map'
         center={this.state.center}
         zoom={this.state.zoom}
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
