import { default as React, addons, Component } from 'react/addons'
import { LeftNav } from 'material-ui'
import { RaisedButton } from 'material-ui'

export default class TimeChallenge extends Component {
  constructor(props) {
    super(props)

    this._15Selected = this._15Selected.bind(this)
    this._30Selected = this._30Selected.bind(this)
    this._60Selected = this._60Selected.bind(this)
    this._90Selected = this._90Selected.bind(this)
  }

  render() {
    return (
      <div>
        <div className="welcome__name-challenge">
          <span>And whats the maximum time you want to spend on one-way to {this.props.locationName}?</span>
        </div>
        <div className="button__row">
          <RaisedButton label="15min" onClick={this._15Selected} />
          <RaisedButton label="30min" onClick={this._30Selected} />
          <RaisedButton label="60min" onClick={this._60Selected} />
          <RaisedButton label="90min" onClick={this._90Selected} />
        </div>
      </div>
    )
  }

  _15Selected() {
    this.props.onTimeSelected(15);
  }

  _30Selected() {
    this.props.onTimeSelected(30);
  }

  _60Selected() {
    this.props.onTimeSelected(60);
  }

  _90Selected() {
    this.props.onTimeSelected(90);
  }
}
