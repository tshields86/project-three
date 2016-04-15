import React from 'react';
import _ from 'lodash';
import ajaxHelpers from '../utils/ajaxHelpers';
import {Link} from 'react-router';
import ListTask from '../components/ListTask';
import AddTask from '../components/AddTask';

// import DeleteContainer from './DeleteContainer';
const ListTaskContainer = React.createClass({

  getInitialState: function() {
    return {
      isLoading: true,
<<<<<<< HEAD
      taskName: []
=======
      _id: '',
      tasks: []
>>>>>>> 8d56acb9d6a7f3b28aeb5a6dbcbb482c2eb64905
    }
  },
  handleDeleteTask: function(e){
    console.log("delete??");
    this.setState({
       deleteTask: e.target.value
    })

    const record = {
      task_id: this.state.deleteTask
    };

    ajaxHelpers.deleteTask(record)
    .then(function(response){
      console.log(response);

    });

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

  handleOnDelete(e){
    console.log('We want to delete', e.target.id)
    console.log("we finna logging task.id", e.target.id);
    ajaxHelpers.deleteTask(e.target.id)
    .then(function(response){
      console.log("this is the response from the backend", response)
    })
  },

  render: function() {
  console.log("this is the response from the backend", this.state.tasks);
  const tasksListElement = [];
  const listStyle = {
    border: "1px solid black"
  }
    console.log(this);
    for (let task in this.state.tasks) {
      tasksListElement.push(
        <div key={this.state.tasks[task]._id} style={listStyle} id={this.state.tasks[task]._id} className="task-card">
          <p>Task: {this.state.tasks[task].taskName}</p>
          <p>Date: {this.state.tasks[task].date}</p>
          <p>Time: {this.state.tasks[task].time}</p>
          <p>Location: {this.state.tasks[task].location}</p>
          <p>Category: {this.state.tasks[task].category}</p>
          <p>Detail: {this.state.tasks[task].detail}</p>
<<<<<<< HEAD
          <button value={this.state.tasks[task]._id} type="button">Edit</button>
          <button onClick={this.handleDeleteTask} value={this.state.tasks[task]._id}type="button">Delete</button>
=======
          <Link to={`/editTask/${this.state.tasks[task]._id}`}>
            <button id={this.state.tasks[task]._id} type="button">Edit</button>
          </Link>
          <button id={this.state.tasks[task]._id} type="button" onClick={this.handleOnDelete}>Delete</button>
>>>>>>> 8d56acb9d6a7f3b28aeb5a6dbcbb482c2eb64905
        </div>
    );
  }

  return (
    <div>
      <h2>Show all Tasks</h2>
      <Link to='addTask'>
          <button type='button' className='add-btn'>+</button>
      </Link>
      <ListTask tasks={tasksListElement}/>
    </div>
    )
  }
});

export default ListTaskContainer;
