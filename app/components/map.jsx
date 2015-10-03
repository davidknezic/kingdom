import React, {PropTypes, Component} from 'react/addons'
import shouldPureComponentUpdate from 'react-pure-render/function'

import GoogleMap from 'google-map-react'
import CastleMarker from './markers/castle'
import BriefcaseMarker from './markers/briefcase'

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

  onChildMouseEnter(key, childProps) {
    console.log('child mouse enter', key, childProps)
  }

  onChildMouseLeave() {
    console.log('child mouse leave')
  }

  onBalloonCloseClick() {
    console.log('balloon close')
  }

  render() {
    return (
       <GoogleMap
         containerProps={{...this.props}}
         ref='map'
         center={this.props.center}
         zoom={this.props.zoom}
         onBoundsChange={this.onBoundsChange}
         onChildClick={this.onChildClick}
         onChildMouseEnter={this.onChildMouseEnter}
         onChildMouseLeave={this.onChildMouseLeave}>

         {['Foo'].map((title, index) => {
           return (
              <CastleMarker title={title} lat={47.498820} lng={8.723689} />
            )
          })}

          {['Foo'].map((title, index) => {
            return (
               <BriefcaseMarker title={title} lat={47.50696} lng={8.70872} />
             )
          })}
      </GoogleMap>
    )
  }
}
