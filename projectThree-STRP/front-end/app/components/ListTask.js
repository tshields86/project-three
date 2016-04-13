import React from 'react';
import {Link} from 'react-router';

function ListTask(props) {
  console.log(props);
  return (
    <div>
      <Link to='/'>
        <button type="button" id='home'>Home</button>
      </Link>
      <h1>Hello World from STRPers</h1>
      <Link to='addTask'>
        <button type="button" id='add-task'>+</button>
      </Link>
      <br/>
      <h2>Show all Tasks</h2>
      {props.tasks}
    </div>
  );
}
 export default ListTask
