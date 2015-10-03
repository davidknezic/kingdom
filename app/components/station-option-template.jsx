import React from 'react'

import {
  PropTypes
} from 'react'

export default class StationOptionTemplate {
  render() {
    return (
      <div>{this.props.data.name}</div>
    )
  }
}

StationOptionTemplate.propTypes = {
  data: PropTypes.object.isRequired
}
