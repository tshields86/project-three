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
      fontFamily: "Palatino Linotype, Book Antiqua, Palatino, serif",
      color: "#f15a22",
    }
    const StyleHeader = {
      position: 'fixed',
      margin: '0auto',
      textAlign: "center",
      fontSize: "50px",
      margin: "15px 50px 0px 50px"
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
