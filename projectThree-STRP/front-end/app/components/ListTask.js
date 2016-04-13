import React from 'react';

function ListTask(props) {
  console.log(props);
  return (
    <div>
      <h2>Show all Tasks</h2>
      {props.tasks}
    </div>
  );
}
 export default ListTask
