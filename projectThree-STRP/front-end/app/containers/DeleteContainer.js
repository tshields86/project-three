
import React, { PropTypes } from 'react';
import Delete from '../components/Delete';
import ajaxHelpers from '../utils/ajaxHelpers';

const DeleteContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      deleteTask: ''

    }
  },
  handledeleteTask: function(e) {
    // this is altering the value
    console.log("delete");
    this.setState({
      deleteTask: e.target.value
    })
    const record = {
      name: this.state.deleteTask
    };
    ajaxHelpers.deleteTask(record)
    .then(function(response){
      console.log(response);
    });
  },
  handleSubmitrecord: function(e){
    e.preventDefault()
    this.setState({
      name: this.state.Task
    });


  },
  render () {
    return (
        <Delete
        onChangerecord={this.handledeleteTask}
        onSubmitrecord={this.handleSubmitrecord}
        />
    )
  }
})

export default DeleteContainer;
