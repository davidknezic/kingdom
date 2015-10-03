import React, { PropTypes } from 'react'
import Main from './main.jsx'
import Map from './map'
import Welcome from './welcome.jsx'
import {AppBar,Styles} from 'material-ui'
import muiTheme from './mui-theme'
import actions from '../actions'
import stores from '../stores'

export default class App extends React.Component {

  constructor() {
    super()

    this.state = {
      process: stores.process
    }

    this.onProcessStoreChange = this.onProcessStoreChange.bind(this)
    stores.process.listen(this.onProcessStoreChange)
  }

  getChildContext() {
    return {
      muiTheme: Styles.ThemeManager.getMuiTheme(muiTheme)
    }
  }

  onProcessStoreChange(store) {
    this.setState({
      process: store
    })
  }

  render() {
    return (
      <div className="app">
        {(() => {
          switch (this.state.process.processState) {
            case 'showResults': return <Main />
            default: return <Welcome />
          }
        })()}
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
}
