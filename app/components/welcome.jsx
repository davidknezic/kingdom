import React, { PropTypes } from 'react'
import actions from '../actions'
import stores from '../stores'
import alt from 'alt'
import mui from 'material-ui'
import {TextField, RaisedButton} from 'material-ui'
import NameChallenge from './name-challenge'
import PersonCountChallenge from './person-count-challenge'
import SizeChallenge from './size-challenge'
import StairsChallenge from './stairs-challenge'
import PriceChallenge from './price-challenge'
import LocationChallenge from './location-challenge'
import TimeChallenge from './time-challenge'
import StoreChallenge from './store-challenge'
import FinishChallenge from './finish-challenge'
import Home from './home'

export default class Welcome extends React.Component {
  constructor() {
    super();

    this.state = {
      userProfile: stores.userProfile,
      process: stores.process
    };

    this.onUserProfileChange = this.onUserProfileChange.bind(this)
    this.onProcessStoreChange = this.onProcessStoreChange.bind(this)
    this._handleNameChange = this._handleNameChange.bind(this)

    stores.userProfile.listen(this.onUserProfileChange)
    stores.process.listen(this.onProcessStoreChange)
  }

  componentWillUnmount() {
    stores.userProfile.unlisten(this.onUserProfileChange)
    stores.process.unlisten(this.onProcessStoreChange)
  }

  onUserProfileChange(store) {
    this.setState({
      userProfile: store,
    })
  }

  onProcessStoreChange(store) {
    this.setState({
      process: store
    })
  }

  shouldComponentUpdate(newState) {
    return this.state.userProfile != newState.userProfile ||
      this.state.process != newState.process
  }

  render() {
    var challenge = ''
    if (this.state.process.processState == 'home' || (this.state.process.state && this.state.process.state.processState == 'home')) {
      challenge = <Home onProceed={this._handleStart} />
    }
    else if (this.state.process.processState == 'getName') {
        challenge = <NameChallenge ref='nameChallenge'
        onProceed={this._handleProceedToNumberOfPeople}
        onChange={this._handleNameChange}
        hintText='Arthur'
        value={this.state.userProfile.name} />
    }
    else if (this.state.process.processState == 'getNumberOfPeople') {
      challenge = <PersonCountChallenge
        onNumberSelected={this._handlePersonCountSelection}
        userName={this.state.userProfile.name} />
    }
    else if (this.state.process.processState == 'getSizePreference') {
      challenge = <SizeChallenge ref='sizeChallenge'
        onSizePreferenceSelected={this._handleSizePreferenceSelected}
        numberOfPeople={this.state.userProfile.numberOfPeople} />
    }
    else if (this.state.process.processState == 'getStairsStuff') {
      challenge = <StairsChallenge
        onStairsPreferenceSelected={this._handleStairsPreferenceSelected} />
    }
    else if (this.state.process.processState == 'getPriceIllusions') {
      challenge = <PriceChallenge
        sizePreference={this.state.userProfile.sizePreference}
        numberOfPeople={this.state.userProfile.numberOfPeople}
        onPriceIllusionSelected={this._handlePriceIllusionsSelected} />
    }
    else if (this.state.process.processState == 'getLocation') {
      challenge = <LocationChallenge
        onProceed={this._handleLocationCertain}
        onLocationSelected={this._handleLocationSelected} />
    }
    else if (this.state.process.processState == 'getAnticipatedTravelTime')
    {
      challenge = <TimeChallenge
        locationName={this.state.userProfile.defaultLocation.name}
        onTimeSelected={this._handleTimeSelected} />
    }
    else if (this.state.process.processState == 'getStore')
    {
      challenge = <StoreChallenge
        onStoreSelected={this._handleStoreSelected} />
    }
    else if (this.state.process.processState == 'finish')
    {
      challenge = <FinishChallenge />
    }

    return (
      <div className="welcome">
        {
          challenge
        }
      </div>
    )
  }

  _handleStart() {
    actions.process.updateProcessState('getName')
  }

  _handleNameChange() {
    actions.userProfile.updateName(this.refs.nameChallenge.getValue())
  }

  _handleProceedToNumberOfPeople() {
    actions.process.updateProcessState('getNumberOfPeople')
  }

  _handlePersonCountSelection(count) {
    actions.userProfile.updateNumberOfPeople(count) //very inconsistent compared to getting the name
    actions.process.updateProcessState('getSizePreference')
  }

  _handleSizePreferenceSelected(preference) {
    actions.userProfile.updateSizePreference(preference)
    actions.process.updateProcessState('getStairsStuff')
  }

  _handleStairsPreferenceSelected(preference) {
    actions.userProfile.updateStairsPreference(preference)
    actions.process.updateProcessState('getPriceIllusions')
  }

  _handlePriceIllusionsSelected(illusions) {
    actions.userProfile.updatePriceIllusions(illusions)
    actions.process.updateProcessState('getLocation')
  }

  _handleLocationSelected(location) {
    actions.userProfile.updateDefaultLocation(location)
  }

  _handleLocationCertain() {
    actions.process.updateProcessState('getAnticipatedTravelTime')
  }

  _handleTimeSelected(time) {
    actions.userProfile.updateDefaultTime(time)
    actions.process.updateProcessState('getStore')
  }

  _handleStoreSelected(store) {
    actions.userProfile.updateStore(store)
    actions.process.updateProcessState('finish')
    actions.flats.show(stores.userProfile.getState())
  }
}
