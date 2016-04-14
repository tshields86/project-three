import React from 'react';
import {Link} from 'react-router';
import mpx from './keys';

const Main = React.createClass({
  componentDidMount: function(){
    L.mapbox.accessToken = mpx;
    var map = L.mapbox.map('map', 'mapbox.streets').setView([40, -74.50], 9);
  },
  render: function(){
    const StyleHeader = {
      position: 'fixed',
      margin: '1vw',
      textAlign: "center"
    }
    const StyleMap = {
      width: '95vw',
      height: '65vw',
      margin: '0vw',
      zIndex: '-3000',
      position: 'fixed'
    };
    const StyleRest = {
      width: '10vw',
      zIndex: '3000'
    }

    return(
      <div>
        <h1 style={StyleHeader}>Mapado</h1>
        <div id='map' style={StyleMap}></div>
        <div style={StyleRest}>{this.props.children}</div>
      </div>
    )
  }
});

export default Main;
