import React from 'react';
import {Link} from 'react-router';
import mpx from './keys';

const Main = React.createClass({
  componentDidMount: function(){
    L.mapbox.accessToken = mpx;
    var map = L.mapbox.map('map', 'mapbox.streets').setView([40, -74.50], 9);
  },
  render: function(){
    const StyleAll = {
      margin: '0',
      boxSizing: 'border-box',
      padding: "0"
    }
    const StyleHeader = {
      position: 'fixed',
      margin: '0auto',
      textAlign: "center"
    }
    const StyleMap = {
      width: '100vw',
      height: '65vw',
      zIndex: '-3000',
      position: 'fixed',
      border: "0",
      padding: "0"
    };
    const StyleData = {
      width: '10vw',
      zIndex: '3000',
      float: 'right',
      marginRight: '2vw'
    }

    return(
      <div style={StyleAll}>
        <h1 style={StyleHeader}>Mapado</h1>
        <div id='map' style={StyleMap}></div>
        <div style={StyleData}>{this.props.children}</div>
      </div>
    )
  }
});

export default Main;
