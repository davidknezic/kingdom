import React, { PropTypes } from 'react'
import actions from '../actions'
import stores from '../stores'
import alt from 'alt'
import Map from './map'
import Side from './side'
import mui from 'material-ui'
import {Table,TableHeader,TableBody,TableRow,TableHeaderColumn,TableRowColumn,TextField, AppBar} from 'material-ui'
import classNames from 'classnames'

import Welcome from './welcome'

export default class Main extends React.Component {

  constructor() {
    super();

    this.state = {
      locations: stores.locations
    };

    this.onChange = this.onChange.bind(this);

    stores.locations.listen(this.onChange);
  }

  componentWillUnmount() {
    stores.locations.unlisten(this.onChange);
  }

  onChange(store) {
    this.setState({
      locations: store
    })
  }

  _onSearchChange() {
    actions.locations.search(this.refs.searchField.getValue())
  }

  shouldComponentUpdate(newState) {
    return this.state.locations != newState.locations;
  }

  render() {
    var editSvg = '<path d="M50 5C25.1 5 5 25.1 5 50s20.1 45 45 45 45-20.1 45-45S74.9 5 50 5zM25.6 73.7l7.6-16.4 8.8 8.8-16.4 7.6zM43 65.2l-8.8-8.8 23.2-23.2 8.8 8.8L43 65.2zM67.1 41l-8.8-8.8 9.4-9.4 8.8 8.8-9.4 9.4z"/>';
    var deleteSvg = '<path d="M50 5C25.147 5 5 25.147 5 50s20.147 45 45 45 45-20.147 45-45S74.853 5 50 5zm27.463 63.31l-9.153 9.153L50 59.153l-18.31 18.31-9.154-9.153L40.846 50l-18.31-18.31 9.156-9.154L50 40.846l18.31-18.31 9.153 9.155L59.153 50l18.31 18.31z"/>';

    return (
      <div className="main">
        <div className="main__sidebar" >
          <AppBar
            title="Hello"
            showMenuIconButton={false} />

          {['Foo','Bar','baz'].map((title, index) => {
            var classes = classNames({ 'sidebar__item__content': true, 'sidebar__item__content--active': index == 0 });

            return (
              <div className="sidebar__item" >
                <div className="sidebar__item__title" >
                  <div className="sidebar__item__title__text" >{title}</div>
                  <svg className="sidebar__item__title__action" viewBox="0 0 100 100" dangerouslySetInnerHTML={{__html: editSvg }} />
                  <svg className="sidebar__item__title__action" viewBox="0 0 100 100" dangerouslySetInnerHTML={{__html: deleteSvg }} />
                </div>
                <div className={classes} >..</div>
              </div>
            )
          })}
        </div>
        <div className="main__map">
          <Map />
        </div>
      </div>
    )
  }
}
