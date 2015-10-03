import { default as React, addons, Component } from 'react/addons'
import { LeftNav } from 'material-ui'
import { RaisedButton } from 'material-ui'
import LocationFinder from './location-finder'
import Logo from './logo'

export default class LocationChallenge extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Logo />
        <div className="welcome__name-challenge">
          <span className="welcome__h1">Understood. Where do you go often? Maybe a place like work...</span>
        </div>
        <LocationFinder onOptionSelected={this.props.onLocationSelected} />
        <div className="welcome__button" >
          <RaisedButton label="Proceed" onClick={this.props.onProceed} />
        </div>
      </div>
    )
  }
}
