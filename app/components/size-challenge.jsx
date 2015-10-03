import { default as React, addons, Component } from 'react/addons'
import { LeftNav } from 'material-ui'
import { RaisedButton } from 'material-ui'

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
        <div className="welcome__name-challenge">
          <span>Sweet. So tell me, do you like it spacey or cozy?</span>
          <br />
          <span>Allright! So, do you {this.props.numberOfPeople > 1 ? 'guys ' : ''}like it spacey or cozy?</span>
        </div>
        <div className="button__row" >
          <RaisedButton label="cozy" onClick={this._cozySelected} />
          <RaisedButton label="spacey" onClick={this._spaceySelected} />
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
