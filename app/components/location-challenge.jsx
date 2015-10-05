import { default as React, addons, Component } from 'react/addons'
import { LeftNav } from 'material-ui'
import { RaisedButton } from 'material-ui'
import LocationFinder from './location-finder'
import Logo from './logo'
import ArrowRight from './arrow-right'

export default class LocationChallenge extends Component {
  constructor(props) {
    super(props)
    this.onOptionSelected = this.onOptionSelected.bind(this);

    this.state = {
      proceedEnabled: false
    }
  }

  onOptionSelected(option) {
    this.props.onLocationSelected(option)

    this.setState({
      proceedEnabled: true,
    })
  }

  render() {
    return (
      <div>
        <Logo />
        <div className="welcome__name-challenge">
          <span className="welcome__h1">Understood. Where do you go often? Maybe a place like work...</span>
        </div>
        <LocationFinder onOptionSelected={this.onOptionSelected} />

        <div className="welcome__button" >
          <RaisedButton label="Proceed" disabled={!this.state.proceedEnabled} onClick={this.props.onProceed} />
          <p>Select an option above to proceed</p>
        </div>
      </div>
    )
  }
}
