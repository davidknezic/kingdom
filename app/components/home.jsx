import { default as React, addons, Component } from 'react/addons'
import { LeftNav } from 'material-ui'
import { TextField, RaisedButton } from 'material-ui'
import Logo from './logo'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  getValue() {
    return this.refs.name.getValue()
  }

  render() {
    return (
      <div className="welcome__container">
        <Logo large={true}/>
        <div className="welcome__h1">Your home is your castle, your block is your kingdom.</div>
        <p className="welcome__introduction">We believe that moving to a new place doesn’t only depend on the flats size and the price, but also on the surrounding, your daily commute and many many more details. Our mission is to find you your new kingdom.</p>
        <div className="welcome__button">
          <RaisedButton label="Start finding your next kingdom!" onClick={this.props.onProceed} />
        </div>
      </div>
    )
  }
}
