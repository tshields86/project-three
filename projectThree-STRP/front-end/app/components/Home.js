import React from 'react';
import {Link} from 'react-router';

const Home = React.createClass({

  render: function(){
    return (
      <div>
        <Link to='listTasks'>
          <button type="button" id='list-task'>Tasks</button>
        </Link>
        
      </div>
    );
  }
});

export default Home;
