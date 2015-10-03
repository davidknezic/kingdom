import { default as React, addons, Component } from 'react/addons'
import { LeftNav } from 'material-ui'
import { RaisedButton } from 'material-ui'
import Logo from './logo'

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
        <Logo />
        <div className="welcome__name-challenge">
          <span className="welcome__h1">Allright. Do you think that {this.props.sizePreference == 'cozy' ? (30 + this.props.numberOfPeople*20)*18 : (50 + this.props.numberOfPeople*25)*18} CHF is too much for a flat?</span>
        </div>
        <div className="button__row">
          <RaisedButton label="What a rip off!" onClick={this._priceLowSelected} />
          <RaisedButton label="sounds just about right" onClick={this._priceMidSelected} />
          <RaisedButton label="I could spend more..." onClick={this._priceHighSelected} />
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
