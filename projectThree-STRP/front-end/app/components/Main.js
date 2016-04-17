import React from 'react';
import {Link} from 'react-router';
import kk from './keys';

const Main = React.createClass({
  componentDidMount: function(){
    L.mapbox.accessToken = kk.mpx;
    Window.map = L.mapbox.map('map', 'mapbox.wheatpaste').setView([40.7527, -73.9772], 13);

  },

  render: function(){
    const StyleAll = {
      margin: '0',
      boxSizing: 'border-box',
      padding: "0",
      textAlign: 'center',
      fontFamily: "helvetica",
      color: "#F15A22"
    }
    const StyleHeader = {
      position: 'fixed',
      margin: '0auto',
      textAlign: "center",
      fontSize: "60px",
      margin: "15px 50px 0px 50px",
      textShadow: '0vw 0 black, 0vw 0vw black, 0vw 0 black, -1vw 0vw black'
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
      width: '25vw',
      zIndex: '3000',
      float: 'right',
      marginRight: '2vw',
      background: "rgba(20,247,239,0.9)",
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
