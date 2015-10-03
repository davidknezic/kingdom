import React, { PropTypes } from 'react'
import actions from '../actions'
import stores from '../stores'
import alt from 'alt'
import mui from 'material-ui'

import throttle from 'lodash.throttle';

import Typeahead from 'react-typeahead-component'

import StationOptionTemplate from './station-option-template'

export default class LocationFinder extends React.Component {

  constructor() {
    super();

    this._search = throttle((value) => actions.locations.fetch(value), 300)

    this.state = {
      inputValue: '',
      locations: stores.locations,
      selectedOption: null,
    };

    stores.locations.listen(this._onLocationsChange.bind(this));
  }

  componentWillUnmount() {
    stores.locations.unlisten(this._onLocationsChange);
  }

  _onLocationsChange(store) {
    this.setState({
      locations: store
    })
  }

  _onSearchChange(event) {
    var value = event.target.value

    this._setInputValue(value)

    this._search(value)
  }

  _onOptionChange(event, option) {
    this._setSelectedOption(option)
  }

  _onOptionClick(event, option) {
    this._setSelectedOption(option)
  }

  _setSelectedOption(option) {
    this.setState({
      selectedOption: option
    })

    this._setInputValue(option.name)

    if (this.props.onOptionSelected) {
      this.props.onOptionSelected(option)
    }
  }

  _setInputValue(value) {
    this.setState({
      inputValue: value,
    })
  }

  render() {
    return (
      <Typeahead
        inputValue={this.state.inputValue}
        optionTemplate={StationOptionTemplate}
        placeholder="Search station..."
        options={this.state.locations.stations}
        onChange={this._onSearchChange.bind(this)}
        onOptionChange={this._onOptionChange.bind(this)}
        onOptionClick={this._onOptionClick.bind(this)} />
    )
  }
}
