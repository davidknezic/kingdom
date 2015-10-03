import { default as React, addons, Component } from 'react/addons'
import { LeftNav } from 'material-ui'
import { TextField, RaisedButton } from 'material-ui'
import Logo from './logo'
import ArrowRight from './arrow-right'

export default class NameChallenge extends Component {
  constructor(props) {
    super(props)
  }

  getValue() {
    return this.refs.name.getValue()
  }

  render() {
    return (
      <div>
        <Logo />
        <div className="welcome__name-challenge">
          <span className="welcome__h1">Nice to meet you. What’s your name? </span>
          <div>
            <TextField
              className="welcome__text-answer"
              hintText={this.props.hintText}
              style={{fontSize: '1.5rem', color: 'white'}}
              value={this.props.value}
              ref='name'
              onChange={this.props.onChange}
              />
          </div>
        </div>

        <div className="arrow-button__container">
          <a className="arrow-button" onClick={this.props.onProceed}><ArrowRight /></a>
        </div>
      </div>
    )
  }
}
