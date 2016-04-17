import React, { PropTypes } from 'react';
import AddTask from '../components/AddTask';
import ajaxHelpers from '../utils/ajaxHelpers';
import {Link} from 'react-router';
import ListTask from '../components/ListTask';
import EditTask from '../components/EditTask';
import HomeStyles from '../styles/HomeStyles';

const EditContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },


  getInitialState: function(){
    return {
      taskName: this.props.params.taskName,
      date: this.props.params.date,
      time: this.props.params.time,
      location: this.props.params.location,
      category: this.props.params.category,
      detail: this.props.params.detail
    }
  },

  // componentDidMount: function() {
  //   ajaxHelpers.getTask(this.props.params.id)
  //   .then(function(response){
  //     console.log('response', response);
  //     this.setState({
  //       tasks: response
  //     });
  //   }.bind(this));
  // },

  render: function () {

    const objEdit = {
        taskName: this.props.params.taskName,
        date: this.props.params.date,
        time: this.props.params.time,
        location: this.props.params.location,
        category: this.props.params.category,
        detail: this.props.params.detail
      }
    console.log("this.props.params.date", this.props.params.date);
    console.log("this is edit task comp tasks" , objEdit);
    return (
    <div>
      <EditTask tasks={objEdit}/>
    </div>
    );
  }
  })

  export default EditContainer;
