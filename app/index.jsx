import React from 'react'
import App from './components/app'

React.render(
  <App />,
  document.getElementById('stage')
)

window.actions = require('./actions')
window.stores = require('./stores')

actions.process.updateProcessState('showResults')
