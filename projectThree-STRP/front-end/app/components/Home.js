import React from 'react';
import {Link} from 'react-router';

const Home = React.createClass({

  render: function(){
    return (
      <div>
        <h1>Hello World from STRPers</h1>
        <Link to='addTask'>
          <button type="button" id='add-task'>Add a Task</button>
        </Link>
      </div>
    );
  }
});

export default Home;
