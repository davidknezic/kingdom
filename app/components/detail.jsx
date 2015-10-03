import { default as React, addons, Component } from 'react/addons'
import { RaisedButton } from 'material-ui'
import actions from '../actions'
import Loading from './loading'

export default class Detail extends Component {

  constructor() {
    super();

    this.state = {
      details: stores.detail.getState(),
    };

    this.onChangeDetail = this.onChangeDetail.bind(this)

    stores.detail.listen(this.onChangeDetail)
  }

  componentWillUnmount() {
    stores.detail.unlisten(this.onChangeDetail)
  }

  onCloseClicked() {
    actions.detail.dismiss()
  }

  onChangeDetail(detail) {
    this.setState({
      details: detail
    })
  }

  render() {
    var instagram = null;

    if(!this.state.details || this.state.details.instagramLoading) {
      instagram = (
        <Loading />
      )
    } else if(this.state.details.instagramError != null) {
        instagram = (
          <div>Fail to load instahype</div>
        )
    } else if(this.state.details.instagram) {
      instagram = (
        <div className="instagram">
          {
            this.state.details.instagram.map((image) => {
              return (
                <img className="instagram__image" key={image.id} src={image.images.thumbnail.url} width={image.images.thumbnail.width} height={image.images.thumbnail.height} />
              )
            })
          }
        </div>
      )
    }


    return (
      <div>
        <h1>Hello World!</h1>
        <RaisedButton label="Cloze" secondary={true} onClick={this.onCloseClicked} />
        <div>
          {instagram}
        </div>
      </div>
    )
  }
}
