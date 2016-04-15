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
      detail: null,
      tasks: null
    }
  },

  componentDidMount: function() {
    ajaxHelpers.getTask(this.props.params.id)
    .then(function(response){
      console.log('response', response);
      this.setState({
        tasks: response
      });
    }.bind(this));
  },

  render: function () {
    console.log("this is edit task comp tasks" , this.state.tasks);
    return (
    <div>
      <EditTask tasks={this.state.tasks}/>
    </div>
    );
  }
  })

  export default EditContainer;
