import React from 'react';
import _ from 'lodash';
import ListTask from '../components/ListTask';
import ajaxHelpers from '../utils/ajaxHelpers';
import {Link} from 'react-router';

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
  const listStyle = {
    border: "1px solid black"
  }
    for (let task in this.state.tasks) {
      tasksListElement.push(
        <div key={this.state.tasks[task]._id} style={listStyle} className="task-card">
          <p>Task: {this.state.tasks[task].taskName}</p>
          <p>Date: {this.state.tasks[task].date}</p>
          <p>Time: {this.state.tasks[task].time}</p>
          <p>Location: {this.state.tasks[task].location}</p>
          <p>Category: {this.state.tasks[task].category}</p>
          <p>Detail: {this.state.tasks[task].detail}</p>
          <button value={this.state.tasks[task]._id} type="button">Edit</button>
          <button value={this.state.tasks[task]._id} type="button">Delete</button>
        </div>
    );
  }
  return (
    <div>
      <ListTask
      tasks={tasksListElement}
        />
    </div>
    )
  }
});

export default ListTaskContainer;
