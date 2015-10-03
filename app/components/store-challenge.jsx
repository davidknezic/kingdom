import { default as React, addons, Component } from 'react/addons'
import { LeftNav } from 'material-ui'
import { RaisedButton } from 'material-ui'

export default class StoreChallenge extends Component {
  constructor(props) {
    super(props)

    this._migrosSelected = this._migrosSelected.bind(this)
    this._coopSelected = this._coopSelected.bind(this)
  }

  render() {
    return (
      <div>
        <div className="welcome__name-challenge">
          <span>Fantastic. Last question - what are you?</span>
        </div>
        <div className="button__row">
          <RaisedButton label="Migros Kid" onClick={this._migrosSelected} />
          <RaisedButton label="Coop Kid" onClick={this._coopSelected} />
        </div>
      </div>
    )
  }

  _migrosSelected() {
    this.props.onStoreSelected('migros');
  }

  _coopSelected() {
    this.props.onStoreSelected('coop');
  }
}
