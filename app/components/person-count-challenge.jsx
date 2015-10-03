import { default as React, addons, Component } from 'react/addons'
import { LeftNav } from 'material-ui'
import { RaisedButton } from 'material-ui'
import Logo from './logo'

export default class PersonCountChallenge extends Component {
  constructor(props) {
    super(props)

    this._oneSelected = this._oneSelected.bind(this)
    this._twoSelected = this._twoSelected.bind(this)
    this._threeSelected = this._threeSelected.bind(this)
    this._fourSelected = this._fourSelected.bind(this)
    this._fiveSelected = this._fiveSelected.bind(this)
  }

  render() {
    return (
      <div>
        <Logo />
        <div className="welcome__name-challenge">
          <span className="welcome__h1">So tell me {this.props.userName}. How many people are you in total?</span>
        </div>
        <div className="button__row" >
          <RaisedButton label="1" onClick={this._oneSelected} />
          <RaisedButton label="2" onClick={this._twoSelected} />
          <RaisedButton label="3" onClick={this._threeSelected} />
          <RaisedButton label="4" onClick={this._fourSelected} />
          <RaisedButton label="5" onClick={this._fiveSelected} />
        </div>
      </div>
    )
  }

  _oneSelected() {
    this.props.onNumberSelected(1);
  }

  _twoSelected() {
    this.props.onNumberSelected(2);
  }

  _threeSelected() {
    this.props.onNumberSelected(3);
  }

  _fourSelected() {
    this.props.onNumberSelected(4);
  }

  _fiveSelected() {
    this.props.onNumberSelected(5);
  }
}
