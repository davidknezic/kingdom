import { default as React, addons, Component } from 'react/addons'
import { LeftNav } from 'material-ui'
import { TextField, RaisedButton } from 'material-ui'

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
        <div className="welcome__name-challenge">
          <span>First, tell us your name </span>
          <TextField
            hintText={this.props.hintText}
            style={{fontSize: '1.5rem', color: 'white'}}
            value={this.props.value}
            ref='name'
            onChange={this.props.onChange}
            />
        </div>
        <div className="welcome__button" >
          <RaisedButton label="Proceed" onClick={this.props.onProceed} />
        </div>
      </div>
    )
  }
}
