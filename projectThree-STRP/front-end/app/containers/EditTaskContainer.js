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
    }
  },

  // componentWillMount: function() {
  //   console.log('component will mount');
  // },
  // componentWillMount: function() {
  //   console.log('component will mount');
  //   ajaxHelpers.getTask(this.props.params.id)
  //   .then((response)=>{
  //     console.log('response in componentWillMount', response);
  //     this.setState({
  //       tasks: response
  //     });
  //   });
  // },

  componentDidMount: function() {
    const query = this.props.location.query
  },



  render: function () {
    console.log("logging in EditTaskContainer the passed info", this.props.location.query);

    return (
      <div>
        <Link to='listTasks'>
          <button type="button" id='list-task'>Tasks</button>
        </Link>
        <div>
          <EditTask />
        </div>
      </div>
    );
  }
  })

  export default EditContainer;
