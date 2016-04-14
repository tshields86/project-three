import React, { PropTypes } from 'react';
import AddTask from '../components/AddTask';
import ajaxHelpers from '../utils/ajaxHelpers';
import {Link} from 'react-router';
import ListTask from '../components/ListTask';
import EditTask from '../components/EditTask';

const EditContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function(){
    return {
      taskName: null,
      date: null,
      time: null,
      location: null,
      category: null,
      detail: null
    }
  },

  grabTask: function() {
    console.log(this.state.params);
    const contact = {
      editID: this.state.params,
    };
    ajaxHelpers.getTask(editID)
    .then(function(response){
      console.log('console.log', response.data.tasks);
      this.setState({
        tasks: response.data.tasks
      });
    }.bind(this));
  },

  render: function () {
    console.log("params",this.state.params);
    return (
    <div>
      <EditTask/>
    </div>
    );
  }
  })

  export default EditContainer;
