import React, { Component } from 'react';
// Material-UI
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
// Style
import './Loader.scss';

export default class Loader extends Component {
  render() {
    return (
      <div id="loader" className="div_loader">
        <Backdrop open={true}>
          <CircularProgress size={60} thickness={7} />
        </Backdrop>
        
      </div>
    );
  }
}