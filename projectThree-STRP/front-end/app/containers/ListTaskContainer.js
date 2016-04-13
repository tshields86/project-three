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
  console.log("this is the response from the backend", this.state.tasks);
  const tasksListElement = [];
    for (let task in this.state.tasks) {
      console.log("task of tasks", this.state.tasks[task])
      tasksListElement.push(
      <div key={this.state.tasks[task]._id} className="task-card">
        <p>Task: {this.state.tasks[task].taskName}</p>
        <p>Date: {this.state.tasks[task].date}</p>
        <p>Time: {this.state.tasks[task].time}</p>
        <p>Location: {this.state.tasks[task].location}</p>
        <p>Category: {this.state.tasks[task].category}</p>
        <p>Detail: {this.state.tasks[task].detail}</p>
      </div>
    );
  }
return (
  <ListTask
    tasks={tasksListElement}
    />
  )
  }
});

export default ListTaskContainer;
