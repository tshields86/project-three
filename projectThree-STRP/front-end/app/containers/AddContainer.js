import React, { PropTypes } from 'react';
import AddTask from '../components/AddTask';
import ajaxHelpers from '../utils/ajaxHelpers';
const AddContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      taskName: '',
      date: null,
      time: null,
      location: '',
      category: '',
      detail: ''
    }
  },
  // handleOn: function (e, param) {
  //   this.setState({
  //       param: e.target.value
  //   })
  // },
  handleOnTaskName: function(e){
    this.setState({
      taskName: e.target.value
    })
  },
  handleOnDate: function(e){
    this.setState({
      date: e.target.value
    })
  },
  handleOnTime: function(e){
    this.setState({
      time: e.target.value
    })
  },
  handleOnLocation: function(e){
    this.setState({
      location: e.target.value
    })
  },
  handleOnCategory: function(e){
    this.setState({
      category: e.target.value
    })
  },
  handleOnDetail: function(e){
    this.setState({
      detail: e.target.value
    })
  },
  handleOnSubmitTask: function(e){
    e.preventDefault();
    this.setState({
      taskName: this.state.taskName,
      date: this.state.date,
      time: this.state.time,
      location: this.state.location,
      category: this.state.category,
      detail: this.state.detail
    });

    const task = {
      taskName: this.state.taskName,
      date: this.state.date,
      time: this.state.time,
      location: this.state.location,
      category: this.state.category,
      detail: this.state.detail
    };

    ajaxHelpers.addTask(task)
    .then(function(response){
      console.log(response);
    })

  },
  render: function () {
    return (
      <AddTask
        onAddTaskName={this.handleOnTaskName}
        onAddDate={this.handleOnDate}
        onAddTime={this.handleOnTime}
        onAddLocation={this.handleOnLocation}
        onAddCategory={this.handleOnCategory}
        onAddDetail={this.handleOnDetail}
        onSubmitTask={this.handleOnSubmitTask}
        />
    );
  }
})

export default AddContainer;
