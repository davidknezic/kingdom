import { default as React, addons, Component } from 'react/addons'
import { LeftNav } from 'material-ui'
import { RaisedButton } from 'material-ui'
import Logo from './logo'

export default class StairsChallenge extends Component {
  constructor(props) {
    super(props)

    this._stairsRageSelected = this._stairsRageSelected.bind(this)
    this._stairsAreOkSelected = this._stairsAreOkSelected.bind(this)
  }

  render() {
    return (
      <div>
        <Logo />
        <div className="welcome__name-challenge">
          <span className="welcome__h1">Gotcha. How do you feel about stairs?</span>
        </div>
        <div className="button__row">
          <RaisedButton label="Hell on earth..." onClick={this._stairsRageSelected} />
          <RaisedButton label="Free workout!" onClick={this._stairsAreOkSelected} />
        </div>
      </div>
    )
  }

  _stairsRageSelected() {
    this.props.onStairsPreferenceSelected('rage');
  }

  _stairsAreOkSelected() {
    this.props.onStairsPreferenceSelected('workout');
  }
}
