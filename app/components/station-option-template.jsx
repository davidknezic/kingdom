import React from 'react'

import {
  PropTypes
} from 'react'

export default class StationOptionTemplate {
  render() {
    console.log('render', this.props)
    return (
      <div>{this.props.data.name}</div>
    )
  }
}

StationOptionTemplate.propTypes = {
  data: PropTypes.object.isRequired
}
