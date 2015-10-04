import React from 'react'
import App from './components/app'
import actions from './actions'
import stores from './stores'

React.render(
  <App />,
  document.getElementById('stage')
)

let hack = function (state) {
  if (state.isLoading == false) {

    // Resultatsseite anzeigen
    actions.process.updateProcessState.defer('showResults')

    // Remove again
    stores.flats.unlisten(hack)

  }
}

// Listen only for once
stores.flats.listen(hack)

window.actions = actions
window.stores = stores
