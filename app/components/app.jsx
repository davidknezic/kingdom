import React, { PropTypes } from 'react'
import Main from './main.jsx'
import {AppBar,Styles} from 'material-ui'
import muiTheme from './mui-theme'

export default class App extends React.Component {

  getChildContext() {
    return {
      muiTheme: Styles.ThemeManager.getMuiTheme(muiTheme),
    };
  }

  render() {
    return (
      <div>
        <AppBar
          title="Title"
          showMenuIconButton={false} />
        <Main />
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object,
}
