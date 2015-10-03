import { default as React, addons, Component } from 'react/addons'
import { LeftNav } from 'material-ui'
import { RaisedButton } from 'material-ui'
import Logo from './logo'
import Loading from './loading'

export default class FinishChallenge extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Logo />
        <div className="welcome__name-challenge">
          <span className="welcome__h1">We're slaying dragons for your new kingdom!<br />Hold on...</span>
        </div>
        <div className="button__row">
          <Loading />
        </div>
      </div>
    )
  }
}
