import { default as React, addons, Component } from 'react/addons'
import { RaisedButton } from 'material-ui'
import actions from '../actions'
import _ from 'lodash'
import LocationFinder from './location-finder'

export default class NewPanel extends Component {

  constructor() {
    super();

    this.state = {
      userProfile: stores.userProfile.getState(),
      newPanel: stores.newPanel.getState(),
    };

    this.onChangeUserProfile = this.onChangeUserProfile.bind(this)
    this.onChangeNewPanel = this.onChangeNewPanel.bind(this)
    this._saveLocation = this._saveLocation.bind(this)

    stores.userProfile.listen(this.onChangeUserProfile)
    stores.newPanel.listen(this.onChangeNewPanel)
  }

  componentWillUnmount() {
    stores.userProfile.unlisten(this.onChangeUserProfile)
    stores.newPanel.unlisten(this.onChangeNewPanel)
  }

  onCloseClicked() {
    actions.newPanel.dismiss()
  }

  onDistanceSelected() {
    actions.newPanel.setCategory('distance')
  }

  onChangeUserProfile(userProfile) {
    this.setState({
      userProfile: userProfile
    })
  }

  onChangeNewPanel(newPanel) {
    this.setState({
      newPanel: newPanel
    })
  }

  _handleLocationSelected(location) {
    actions.newPanel.updateLocation(location)
  }

  _15Selected() {
    actions.newPanel.updateTime(15);
  }

  _30Selected() {
    actions.newPanel.updateTime(30);
  }

  _60Selected() {
    actions.newPanel.updateTime(60);
  }

  _90Selected() {
    actions.newPanel.updateTime(90);
  }

  _back() {
    actions.newPanel.setCategory('')
  }

  _saveLocation() {
    actions.userProfile.addLocationTime(
      {
        location: this.state.newPanel.location,
        time: this.state.newPanel.time
      })
    actions.newPanel.setCategory('')
    actions.newPanel.dismiss()
  }

  renderLocationChooser() {
    return (
      <div>
        <div className="welcome__name-challenge">
          <span className="welcome__h1">Choose another location that's important to you</span>
        </div>
        <LocationFinder onOptionSelected={this._handleLocationSelected} />

        <div className="welcome__name-challenge">
          <span className="welcome__h1">Whats the acceptable time one trip should take you?</span>
        </div>
        <div className="button__row">
          <RaisedButton label="15 min" onClick={this._15Selected} />
          <RaisedButton label="30 min" onClick={this._30Selected} />
          <RaisedButton label="60 min" onClick={this._60Selected} />
          <RaisedButton label="90 min" onClick={this._90Selected} />
        </div>

        <div className="welcom__button">
          <RaisedButton label="back" onClick={this._back} />
          <RaisedButton label="Save this additional location" onClick={this._saveLocation} />
        </div>
      </div>
    )
  }

  renderCategories() {
    var distance = '<path class="st1" d="M-71 121.1c-2.7 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9 4.9 2.2 4.9 4.9-2.2 4.9-4.9 4.9zm0-14.8c-5.5 0-9.9 4.4-9.9 9.9v.4c0 1 .2 2 .6 3 2.1 7 9.3 16 9.3 16s7.2-9.1 9.3-16c.3-.9.5-1.9.6-3v-.4c0-5.4-4.4-9.9-9.9-9.9z"/>'
    var community = '<path class="st1" d="M-78.4 128.4c-2-1.1-2.1-4.3-.6-7.8-.8.4-1.6.7-2.6.7-1.2 0-2.2-.4-3.1-1-.8.6-1.5 1.5-2.1 2.6-1.4 2.6-1.6 5.2-.4 5.9.6.3 1.1.1 1.7-.5-.1.6-.2 1.2-.2 1.9 0 3 1.1 5.4 2.6 5.4.9 0 1.3-.9 1.5-2.2.2 1.3.6 2.2 1.5 2.2 1.4 0 2.6-2.4 2.6-5.4 0-.5 0-1-.1-1.5-.3-.1-.6-.1-.8-.3zm-3.2-8.1c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3-4.3 1.9-4.3 4.3c0 2.3 2 4.3 4.3 4.3zm26.4 2.6c-.6-1.1-1.4-2-2.1-2.6-.9.6-2 1-3.1 1-.9 0-1.8-.3-2.6-.7.6 1.3 1 2.7 1.1 3.9.1 1.9-.5 3.2-1.6 3.9-.2.1-.5.2-.8.3-.1.5-.1 1-.1 1.5 0 3 1.2 5.4 2.6 5.4.9 0 1.3-.9 1.5-2.2.2 1.3.6 2.2 1.5 2.2 1.4 0 2.6-2.4 2.6-5.4 0-.7-.1-1.3-.2-1.9.6.6 1.2.8 1.7.5 1.1-.7.9-3.3-.5-5.9zm-5.2-2.6c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3-4.3 1.9-4.3 4.3c-.1 2.3 1.9 4.3 4.3 4.3zm-10.6-3.4c2.9 0 5.3-2.4 5.3-5.3s-2.4-5.3-5.3-5.3-5.3 2.4-5.3 5.3c0 3 2.4 5.3 5.3 5.3zm6.8 10.4c1.5-.8 1.3-4.1-.4-7.2-.7-1.4-1.7-2.5-2.6-3.2-1.1.8-2.4 1.3-3.8 1.3s-2.7-.5-3.8-1.3c-.9.8-1.8 1.9-2.6 3.2-1.7 3.1-1.9 6.4-.4 7.2.7.4 1.4.1 2.1-.6-.1.7-.2 1.5-.2 2.3 0 3.6 1.4 6.5 3.1 6.5 1 0 1.6-1 1.8-2.7.2 1.6.8 2.7 1.8 2.7 1.7 0 3.1-2.9 3.1-6.5 0-.8-.1-1.6-.2-2.3.7.7 1.5 1 2.1.6z"/>'
    var drinks = '<path class="st1" d="M-73.3 115.6c0 .7-1 .7-1 0s1-.7 1 0M-73.4 113.6c0 .3-.4.3-.4 0s.4-.3.4 0M-73.5 117.4c0 .5-.7.5-.7 0s.7-.5.7 0M-73.1 119.2c0 .4-.5.4-.5 0s.5-.4.5 0M-65.6 109.2c-.6.2-.7-.1-.1-.3.7-.3.8.1.1.3M-72.7 114.4c0 .3-.4.3-.4 0s.4-.3.4 0M-72.8 116.9c0 .3-.4.3-.4 0s.4-.3.4 0M-73.3 120.7c0 .3-.4.3-.4 0s.4-.3.4 0M-65.8 110.7c.2-.1.6.9.4.9-.2.1-.6-.9-.4-.9M-64.4 109.7c.7.2.6.5-.1.3s-.6-.5.1-.3M-64.9 110.4c.5.4.3.7-.2.2-.5-.4-.3-.6.2-.2"/><path class="st1" d="M-62.4 112.7c-.9 1-2.2 1.6-3.4 1.6.1-.6.3-1.1.6-1.5.2-.2.1-.5-.5-.5h-1.7l4.8-5.6c1.5 1.6 1.7 4.2.2 6zm-7.1 17.1c-1 .4-1.7.4-2.7 0-6-2.2-4.6-8.1-3.5-11.7.7-2.3.8-3.9.2-5-.2-.4-.2-.4 0-.4h2.6v.1c0 .3.2.5.5.5s.5-.2.5-.5v-.1h5.7c.2 0 .2 0 0 .4-.4 1.1-.5 2.6.2 5 1 3.6 2.5 9.6-3.5 11.7zm3.8-24.4c1 .3 1.8.8 2.3 1.5l-2.4 2.8c-.3 0-.5 0-.5.1s.1.1.3.2l-.7.9 1-5.5zm3 .8l-.4.5c-.7-.9-1.7-1.5-2.8-1.7l-1.2 6.4-.8.9H-74l-1.8-5.8c-.4-1.3-.8-1.7-1.8-1.5l-6.4 1.8v.8l6.4-1.8c.6-.2.8 0 1 .6l1.8 5.8h-1.1c-.6 0-.7.3-.5.5.9.9.8 2.8 0 5.4-1.2 4-2.9 10.6 4.1 13 .1.4.2.7.3 1.1-.2.2-.4.5-.4.8 0 .4.2.7.5.9v.8c-2.2.8-4.5 1-4.5 1.7 0 .3.2.5.5.5h10.2c.3 0 .5-.2.5-.5 0-.7-2.3-.9-4.5-1.7v-.8c.3-.2.5-.5.5-.9 0-.3-.1-.6-.4-.8.1-.4.2-.8.3-1.1 6.9-2.4 5.3-9 4.1-13-.4-1.4-.7-2.6-.6-3.6 1.4 0 2.8-.6 3.7-1.7 1.6-1.9 1.4-4.9-.6-6.6z"/><path class="st1" d="M-72.9 122.1c0 .3-.4.3-.4 0s.4-.3.4 0M-72.2 121c0 .5-.7.5-.7 0s.7-.5.7 0M-71.9 118.3c0 .5-.7.5-.7 0-.1-.5.7-.5.7 0M-71.8 115.7c0 .4-.6.4-.6 0s.6-.4.6 0"/></g>'
    var nature = '<path class="st1" d="M-60.4 117.2c.2-.6.3-1.2.3-1.9 0-2.9-2.1-5.2-4.8-5.7-.2-3-2.7-5.4-5.8-5.4-3 0-5.5 2.3-5.8 5.3-3.1.2-5.5 2.7-5.5 5.8 0 .7.1 1.3.3 1.9-1.6 1-2.7 2.8-2.7 4.9 0 3.2 2.6 5.8 5.8 5.8 1.4 0 2.7-.5 3.7-1.3.5.5 1 .9 1.7 1.2v10h4.4V128c.8-.3 1.5-.7 2-1.2.9.7 2.1 1 3.3 1 3.2 0 5.8-2.6 5.8-5.8 0-2-1-3.8-2.7-4.8z"/>'
    var shopping = '<path class="st1" d="M-80.2 115.1h3.2v.8c-.4.3-.7.8-.7 1.3 0 .9.7 1.6 1.6 1.6.9 0 1.5-.7 1.5-1.6 0-.6-.3-1.1-.8-1.4v-.8h8v1.1c-.2.3-.4.6-.4 1 0 .9.7 1.6 1.5 1.6.9 0 1.5-.7 1.5-1.6 0-.7-.5-1.3-1.1-1.5v-.6h3.2l2.4 14.6h-21.6l1.7-14.5zm4.8-4.1c0-2.4 1.5-4.2 3.9-4.2s4.1 1.8 4.1 4.2v2.4h-8V111zm14.4 2.5h-4.8V111c0-3.1-2.6-6-5.7-6s-5.5 2.9-5.5 6v2.4h-4.8l-2.4 17.9h26.4l-3.2-17.8z"/>'

    return(
      <div>
        <div className="welcome__name-challenge">
          <span className="welcome__h2">What else is important to you?</span>
        </div>
        <div className="categories">
          <a className="categories__item" onClick={this.onDistanceSelected}>
            <div className="categories__item__icon">
              <svg className="svg-icon" viewBox="-95 97 48 48" dangerouslySetInnerHTML={{__html: distance }} />
            </div>
            <div className="categories__item__title">Distance To...</div>
          </a>
          <a className="categories__item">
            <div className="categories__item__icon">
              <svg className="svg-icon" viewBox="-95 97 48 48" dangerouslySetInnerHTML={{__html: community }} />
            </div>
            <div className="categories__item__title">Communities</div>
          </a>
          <a className="categories__item">
            <div className="categories__item__icon">
              <svg className="svg-icon" viewBox="-95 97 48 48" dangerouslySetInnerHTML={{__html: drinks }} />
            </div>
            <div className="categories__item__title">Drinks</div>
          </a>
          <a className="categories__item">
            <div className="categories__item__icon">
              <svg className="svg-icon" viewBox="-95 97 48 48" dangerouslySetInnerHTML={{__html: nature }} />
            </div>
            <div className="categories__item__title">Nature</div>
          </a>
          <a className="categories__item">
            <div className="categories__item__icon">
              <svg className="svg-icon" viewBox="-95 97 48 48" dangerouslySetInnerHTML={{__html: shopping }} />
            </div>
            <div className="categories__item__title">Shopping</div>
          </a>
        </div>
      </div>
    )
  }

  render() {
    var categories = ''

    if (!this.state.newPanel.category || this.state.newPanel.category == '') {
      categories = this.renderCategories()
    }

    var locationChooser = ''
    if (this.state.newPanel.category == 'distance') {
      locationChooser = this.renderLocationChooser()
    }

    return (
      <div>
        <div className="details__cloze" >
          <RaisedButton label="Cloze" secondary={true} onClick={this.onCloseClicked} />
        </div>
        {
          categories
        }
        {
          locationChooser
        }
      </div>
    )
  }
}
