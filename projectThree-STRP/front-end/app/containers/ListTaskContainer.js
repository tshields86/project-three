import React from 'react';
import _ from 'lodash';
import ajaxHelpers from '../utils/ajaxHelpers';
import {Link} from 'react-router';
import ListTask from '../components/ListTask';
import AddTask from '../components/AddTask';

const ListTaskContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      isLoading: true,
      _id: '',
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

  handleOnDelete(e){
    console.log('We want to delete', e.target.id)
    console.log("we finna logging task.id", e.target.id);
    ajaxHelpers.deleteTask(e.target.id)
    .then(function(response){
      console.log("this is the response from the backend", response)
    })
  },


  handleOnEdit(e){
    e.preventDefault();
    console.log("logging the e.target in ListTaskContainer", e.target.value);
    console.log("handle on click edit");
    console.log("logging in ListTaskContainer all tasks", this.state.tasks);
    console.log("logging in ListTaskContainer one task", this.state.tasks[0]);
    console.log("logging in ListTaskContainer one task", this.state.tasks[0].detail);
    let taskPass = this.state.tasks;
    this.context.router.push({
      pathname: '/editTask',
      query: {
        entireObj: this.state.tasks[e.target.id].detail,
        specificValue: e.target.value
      }
    })

  },

  render: function() {
  console.log("this is the response from the backend", this.state.tasks);
  const tasksListElement = [];
  const listStyle = {
    border: "1px solid black"
  }
    for (let task in this.state.tasks) {
      tasksListElement.push(
        <div key={this.state.tasks[task]._id} style={listStyle} id={this.state.tasks[task]._id} className="task-card">
          <p>Task: {this.state.tasks[task].taskName}</p>
          <p>Date: {this.state.tasks[task].date}</p>
          <p>Time: {this.state.tasks[task].time}</p>
          <p>Location: {this.state.tasks[task].location}</p>
          <p>Category: {this.state.tasks[task].category}</p>
          <p>Detail: {this.state.tasks[task].detail}</p>
          <button id={this.state.tasks[task]._id}
                  value={[this.state.tasks[task].taskName,
                          this.state.tasks[task].date,
                          this.state.tasks[task].time,
                          this.state.tasks[task].location,
                          this.state.tasks[task].category,
                          this.state.tasks[task].detail]}
                  type="button" onClick={this.handleOnEdit}>Edit</button>
          <button id={this.state.tasks[task]._id} type="button" onClick={this.handleOnDelete}>Delete</button>
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
