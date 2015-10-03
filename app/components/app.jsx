import React, { PropTypes } from 'react'
import Main from './main.jsx'
import Map from './map'
import Welcome from './welcome.jsx'
import {AppBar,Styles} from 'material-ui'
import muiTheme from './mui-theme'

export default class App extends React.Component {

  getChildContext() {
    return {
      muiTheme: Styles.ThemeManager.getMuiTheme(muiTheme)
    }
  }

  render() {
    return (
      <div className="app">
        <Welcome />
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
}
