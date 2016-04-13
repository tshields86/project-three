import React from 'react';
import _ from 'lodash';
import ListTask from '../components/ListTask';
import ajaxHelpers from '../utils/ajaxHelpers';

const ListTaskContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      tasks: []
    }
  },
  componentDidMount: function() {
    ajaxHelpers.getTasks()
    //TODO show my tasks
    .then(function(response){
      console.log('console.log', response.data.tasks);
      this.setState({
        tasks: response.data.tasks
      });
    }.bind(this));
  },

render: function() {

  const Tasks = this.state.tasks.map(task, index) => {
    return (
      <div key={task._id} className="task-card">
        <p>Task: {task.taskName}</p>
        <p>Date: {task.date}</p>
        <p>Time: {task.time}</p>
        <p>Location: {task.location}</p>
        <p>Category: {task.category}</p>
        <p>Detail: {task.detail}</p>
      </div>
    )
  }
}
return (
  <ListTask
    tasks = {Tasks}
    />
)
  }
});

export default ListTaskContainer;
