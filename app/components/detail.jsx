import { default as React, addons, Component } from 'react/addons'
import { RaisedButton } from 'material-ui'
import actions from '../actions'
import Loading from './loading'
import _ from 'lodash'

export default class Detail extends Component {

  constructor() {
    super();

    this.state = {
      details: stores.detail.getState(),
      userProfile: stores.userProfile.getState(),
    };

    this.onChangeDetail = this.onChangeDetail.bind(this)
    this.onChangeUserProfile = this.onChangeUserProfile.bind(this)

    stores.detail.listen(this.onChangeDetail)
    stores.userProfile.listen(this.onChangeUserProfile)
  }

  componentWillUnmount() {
    stores.detail.unlisten(this.onChangeDetail)
    stores.userProfile.unlisten(this.onChangeUserProfile)
  }

  onCloseClicked() {
    actions.detail.dismiss()
  }

  onChangeDetail(detail) {
    this.setState({
      details: detail
    })
  }

  onChangeUserProfile(userProfile) {
    this.setState({
      userProfile: userProfile
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

    var areas = this.state.details.flat.area;

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
            {

              _.keys(areas).map((key) => {
                var area = areas[key];

                var perc = area.min / this.state.userProfile.time;
                return (
                  <tr style={{color: `hsl(${Math.round(120*perc)}, 100%, 50%)`}}>
                    <th>{this.state.userProfile.location ? this.state.userProfile.location.name : ''}</th>
                    <td>{area.min} - {area.max}min</td>
                  </tr>
                )
              })
            }
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
