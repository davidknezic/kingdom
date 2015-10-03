import { default as React, addons, Component } from 'react/addons'
import { LeftNav } from 'material-ui'

export default class Map extends Component {

  render() {
    return (
      <LeftNav
        ref="leftNav"
        docked={false}
        isInitiallyOpen={false}>
        Hello!
      </LeftNav>
    )
  }
}
