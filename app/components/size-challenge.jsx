import { default as React, addons, Component } from 'react/addons'
import { LeftNav } from 'material-ui'
import { RaisedButton } from 'material-ui'
import Logo from './logo'

export default class SizeChallenge extends Component {
  constructor(props) {
    super(props)

    this._cozySelected = this._cozySelected.bind(this)
    this._spaceySelected = this._spaceySelected.bind(this)
  }

  getValue() {
    return this.refs.name.getValue()
  }

  render() {
    return (
      <div>
        <Logo />
        <div className="welcome__name-challenge">
          <span className="welcome__h1">Sweet. So tell me, how do you like it?</span>
        </div>
        <div className="button__row" >
          <RaisedButton label="cozy" onClick={this._cozySelected} />
          <RaisedButton label="spacy" onClick={this._spaceySelected} />
        </div>
      </div>
    )
  }

  _cozySelected() {
    this.props.onSizePreferenceSelected('cozy');
  }

  _spaceySelected() {
    this.props.onSizePreferenceSelected('spacey');
  }
}
