import React from 'react';
import {Link} from 'react-router';

const Main = React.createClass({
  render: function(){
    return(
      <div>
        <h1>Hello World from STRPers</h1>
        {this.props.children}
      </div>
    )
  }
});

export default Main;
