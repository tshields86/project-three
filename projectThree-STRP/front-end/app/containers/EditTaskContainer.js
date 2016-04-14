import React, { PropTypes } from 'react';
import EditTask from '../components/EditTask';
import ajaxHelpers from '../utils/ajaxHelpers';

const ListTaskContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      task: []
    }
  },
  componentDidMount: function() {
    ajaxHelpers.getTask()
    //TODO show task
    .then(function(response){
      console.log('console.log', response.data.task);
      this.setState({
        task: response.data.task
      });
    }.bind(this));
  },

  render: function() {
  console.log("response from the backend", this.state.task);
  const taskEditElement = [];
  const listStyle = {
    border: "1px solid black"
  }
    for (let task in this.state.task) {
      taskEditElement.push(
        <div key={this.state.task._id} style={listStyle} className="edit-card">
          <p>Task: {this.state.task.taskName}</p>
          <p>Date: {this.state.task.date}</p>
          <p>Time: {this.state.task.time}</p>
          <p>Location: {this.state.task.location}</p>
          <p>Category: {this.state.task.category}</p>
          <p>Detail: {this.state.task.detail}</p>
          <button value={this.state.task._id} type="button">Edit</button>
        </div>
    );
  }
  return (
    <div>
      <EditTask
      tasks={taskEditElement}
        />
    </div>
    )
  }
});

// export default ListTaskContainer;
