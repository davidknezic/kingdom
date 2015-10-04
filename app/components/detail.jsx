import { default as React, addons, Component } from 'react/addons'
import { RaisedButton } from 'material-ui'
import actions from '../actions'
import stores from '../stores'
import Loading from './loading'
import _ from 'lodash'

export default class Detail extends Component {

  constructor() {
    super();

    this.state = {
      details: stores.detail.getState(),
      userProfile: stores.userProfile.getState(),
      migros: stores.migros.getState(),
      coop: stores.coop.getState(),
    };

    this._onStateChange = this.onStateChange.bind(this)

    stores.detail.listen(this._onStateChange)
    stores.userProfile.listen(this._onStateChange)
    stores.migros.listen(this._onStateChange)
    stores.coop.listen(this._onStateChange)
  }

  componentWillUnmount() {
    stores.detail.unlisten(this._onStateChange)
    stores.userProfile.unlisten(this._onStateChange)
    stores.migros.unlisten(this._onStateChange)
    stores.coop.unlisten(this._onStateChange)
  }

  onCloseClicked() {
    actions.detail.dismiss()
  }

  onStateChange() {
    this.setState({
      details: stores.detail.getState(),
      userProfile: stores.userProfile.getState(),
      migros: stores.migros.getState(),
      coop: stores.coop.getState(),
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

          <p className="details__text" dangerouslySetInnerHTML={{__html: this.state.details.flatDetails.adDescription }}></p>

          <div className="actions">
            <div className="actions__like">
              <svg className="actions__like__icon" viewBox="0 0 100 100">
                <path d="M88.1,19.1c-4.4-4.4-10.3-6.9-16.5-6.9S59.5,14.7,55,19.1l-5,5.1l-5-5.1c-4.4-4.4-10.3-6.9-16.6-6.9s-12.1,2.4-16.6,6.9  c-9.1,9.1-9.1,24,0,33.1L50,90.4l32.8-32.8l5.3-5.3c4.4-4.4,6.9-10.3,6.9-16.6C95,29.4,92.6,23.5,88.1,19.1z M74.2,17.1  c-4.6,0.3-9.3,2.8-14.1,7.4c-1.5,1.5-3.2,3.1-5,4.8l-2-2l4.9-4.9c3.6-3.6,8.3-5.5,13.3-5.5C72.3,16.8,73.3,16.9,74.2,17.1z   M28.1,16.8c3.4,0,6.6,0.9,9.4,2.5c-2-0.6-4.2-0.9-6.3-0.9c-3.7,0-9.3,1-14.2,6c-6.7,6.7-7,15.5-4.5,22c-5-7.3-4.3-17.5,2.2-24  C18.4,18.8,23.1,16.8,28.1,16.8z"/>
              </svg>
              <span className="actions__like__title">Merken</span>
            </div>
            <div className="actions__visit">
              <svg className="actions__visit__icon" viewBox="0 0 100 100">
                <path d="M84.215,47.625c-0.62-0.691-15.409-16.915-34.216-16.915c-18.804,0-33.595,16.224-34.215,16.915L13.65,50l2.135,2.376  c0.619,0.689,15.41,16.914,34.214,16.914c18.807,0,33.596-16.225,34.216-16.914L86.35,50L84.215,47.625z M40.358,60.445  c-7.482-2.598-13.643-7.51-16.86-10.445c3.219-2.937,9.378-7.849,16.86-10.445c-2.815,2.6-4.589,6.311-4.589,10.445  C35.77,54.134,37.543,57.845,40.358,60.445z M45.126,59.631c-2.211,0-4.006-1.792-4.006-4.004c0-2.213,1.795-4.006,4.006-4.006  c2.212,0,4.005,1.793,4.005,4.006C49.131,57.839,47.338,59.631,45.126,59.631z M59.623,60.461c2.825-2.601,4.606-6.318,4.606-10.461  c0-4.134-1.773-7.845-4.589-10.445c7.487,2.598,13.65,7.514,16.866,10.45C73.294,52.948,67.134,57.87,59.623,60.461z"/>
              </svg>
              <span className="actions__visit__title">Besuchen</span>
            </div>
            <div className="actions__contact">
              <svg className="actions__contact__icon" viewBox="0 0 100 100">
                <g>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M92.678,46.291c-4.614,12.024-15.415,21.635-24.247,24.806   c-3.55,1.275-7.223,1.855-10.739,1.637c-6.479-0.002-4.379-4.887-1.525-9.6c-12.015-3.832-20.72-15.076-20.72-28.361   C35.446,18.33,48.776,5,65.219,5c16.442,0,29.772,13.33,29.772,29.773C94.991,38.856,94.165,42.746,92.678,46.291z M65.219,9.156   c-14.146,0-25.616,11.469-25.616,25.616c0,13.276,9.12,24.074,22.056,25.369c2.508,0.134-2.634,5.499-3.769,8.653   c-0.041,1.351,6.787-0.482,10.335-2.05c8.213-3.628,17.295-12.965,20.743-22.399c1.193-2.958,1.867-6.186,1.867-9.573   C90.835,20.625,79.365,9.156,65.219,9.156z M74.911,39.619c-1.912,0-3.461-1.55-3.461-3.461c0-1.912,1.549-3.462,3.461-3.462   s3.462,1.55,3.462,3.462C78.373,38.069,76.823,39.619,74.911,39.619z M65.219,39.619c-1.912,0-3.462-1.55-3.462-3.461   c0-1.912,1.55-3.462,3.462-3.462s3.462,1.55,3.462,3.462C68.681,38.069,67.131,39.619,65.219,39.619z M55.526,39.619   c-1.912,0-3.462-1.55-3.462-3.461c0-1.912,1.55-3.462,3.462-3.462s3.462,1.55,3.462,3.462   C58.988,38.069,57.438,39.619,55.526,39.619z M26.024,73.832c0.46,0.431,3.816,3.588,7.073,5.396   c5.545,3.078,7.28,1.645,7.801,1.124c0,0,0.889-0.846,1.696-1.873c0.718-0.917,1.374-2.226,1.374-2.226   c0.953-1.684,2.734-2.434,4.62-1.401l10.829,7.168c1.021,1.024,1.277,2.879,0.658,4.31c0,0-0.608,1.837-1.477,3.461   c-0.622,1.165-1.588,2.272-1.588,2.272c-1.829,1.834-2.903,2.371-4.619,2.628c0,0-16.752,3.558-33.729-13.418   c-0.008-0.009-0.016-0.016-0.025-0.024c-0.003-0.003-0.004-0.006-0.007-0.007c-0.003-0.003-0.005-0.006-0.008-0.008   c-0.011-0.012-0.018-0.02-0.027-0.03C1.655,64.196,5.35,47.56,5.35,47.56c0.257-1.719,0.792-2.795,2.622-4.628   c0,0,1.106-0.967,2.269-1.59c1.621-0.87,3.454-1.479,3.454-1.479c1.429-0.621,3.28-0.362,4.303,0.66l7.154,10.849   c1.032,1.891,0.212,3.604-1.467,4.56c0,0-1.272,0.692-2.187,1.412c-1.026,0.809-1.87,1.699-1.87,1.699   c-0.519,0.521-2.061,2.147,1.01,7.703C22.443,70.01,25.597,73.374,26.024,73.832z"/>
                </g>
              </svg>
              <span className="actions__contact__title">Kontaktieren</span>
            </div>
          </div>

          <table className="details__table">
            <tr>
              <th>Floor</th>
              <td>{this.state.details.flat.floorLabel}</td>

              <th>
                {(() => {
                  switch (this.state.userProfile.store) {
                    case 'coop': return 'Coop';
                    default: return 'Migros';
                  }
                })()}
              </th>
              <td>
                {(() => {
                  switch (this.state.userProfile.store) {
                    case 'coop': return this.state.coop.distance;
                    default: return this.state.migros.distance;
                  }
                })()} meters
              </td>
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

                var location = _.find(stores.userProfile.getState().locations, (location) => location.location.uic == key);
                var perc = area.min / location.time;
                return (
                  <tr style={{color: `hsl(${Math.round(120-(120*perc))}, 100%, 50%)`}}>
                    <th>{location && location.location ? location.location.name : ''}</th>
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
