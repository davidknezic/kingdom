import { default as React, addons, Component } from 'react/addons'
import { RaisedButton } from 'material-ui'
import actions from '../actions'

export default class Detail extends Component {

  constructor() {
    super();

    this.state = {
      detail: stores.detail,
    };

    stores.detail.listen(this.onChangeDetail.bind(this))
  }

  componentWillUnmount() {
    stores.detail.unlisten(this.onChangeDetail)
  }

  onChange(store) {
    this.setState({
      locations: store
    })
  }

  onCloseClicked() {
    actions.detail.dismiss()
  }

  onChangeDetail(detail) {
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <RaisedButton label="Cloze" secondary={true} onClick={this.onCloseClicked} />
      </div>
    )
  }
}
