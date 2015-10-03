import { default as React, addons, Component } from 'react/addons'
import { LeftNav } from 'material-ui'
import { RaisedButton } from 'material-ui'

export default class PriceChallenge extends Component {
  constructor(props) {
    super(props)

    this._priceLowSelected = this._priceLowSelected.bind(this)
    this._priceMidSelected = this._priceMidSelected.bind(this)
    this._priceHighSelected = this._priceHighSelected.bind(this)
  }

  render() {
    return (
      <div>
        <div className="welcome__name-challenge">
          <span>Allright. What do you think about CHF {this.props.sizePreference == 'cozy' ? (30 + this.props.numberOfPeople*20)*18 : (50 + this.props.numberOfPeople*25)*18} for a flat???</span>
        </div>
        <div className="button__row">
          <RaisedButton label="That’s a joke right?!" onClick={this._priceLowSelected} />
          <RaisedButton label="Uhh, yeah sounds about right" onClick={this._priceMidSelected} />
          <RaisedButton label="Quite affordable actually" onClick={this._priceHighSelected} />
        </div>
      </div>
    )
  }

  _priceLowSelected() {
    this.props.onPriceIllusionSelected('low');
  }

  _priceMidSelected() {
    this.props.onPriceIllusionSelected('mid');
  }

  _priceHighSelected() {
    this.props.onPriceIllusionSelected('high');
  }
}
