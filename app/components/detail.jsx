import { default as React, addons, Component } from 'react/addons'
import { RaisedButton } from 'material-ui'
import actions from '../actions'
import Loading from './loading'
import Carousel from 'react-responsive-carousel'

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

  _renderInstagram() {
    if(!this.state.details || this.state.details.instagramLoading) {
      return (
        <Loading />
      )
    }

    if(this.state.details.instagramError != null) {
        return (
          <div>Fail to load instahype</div>
        )
    }

    if(this.state.details.instagram) {
      return (
        <div className="instagram">
          <h4 className="instagram__headline">Images from instagram</h4>
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
  }

  render() {

    if(!this.state.details.flat || !this.state.details.flatDetails) {
      return <div>not ready</div>
    }

    return (
      <div className="details">
        <div className="details__left" >
          <p><strong>{this.state.details.flat.street}, {this.state.details.flat.zip} {this.state.details.flat.city}</strong></p>
          <h3 className="details__title" >{this.state.details.flat.title}</h3>
          <p dangerouslySetInnerHTML={{__html: this.state.details.flatDetails.adDescription }} ></p>
          <table className="details__table">
            <tr>
              <th>Floor</th>
              <td>{this.state.details.flat.floorLabel}</td>
            </tr>
            <tr>
              <th>Rooms</th>
              <td>{this.state.details.flat.numberRooms}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{this.state.details.flat.sellingPrice} {this.state.details.flat.currency}</td>
            </tr>
            <tr>
              <th>Size</th>
              <td>{this.state.details.flat.surfaceLiving} m2</td>
            </tr>
          </table>
        </div>
        <div className="details__right" >
          <div className="details__cloze" >
            <RaisedButton label="Cloze" secondary={true} onClick={this.onCloseClicked} />
          </div>
          <img
            className="details__image"
  					src={ this.state.details.flatDetails.pictures[0] } />
          {this._renderInstagram()}
        </div>
      </div>
    )
  }
}
