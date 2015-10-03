import React from 'react';
import {RefreshIndicator} from 'material-ui';

export default class Loading extends React.Component {
  render() {
    return (
      <div className="loading" >
        <RefreshIndicator size={40} left={-20} top={20} status="loading" />
      </div>
    )
  }
}
