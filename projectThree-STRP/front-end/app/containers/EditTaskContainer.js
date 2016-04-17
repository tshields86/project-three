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
      taskName: null,
      date: null,
      time: null,
      location: null,
      category: null,
      detail: null,
      thisTask: null
    }
  },


  componentWillMount: function() {
    console.log('component will mount');
    ajaxHelpers.getTask(this.props.params.id)
    .then((response)=>{
      console.log('response in componentWillMount', response);
      this.setState({
        tasks: response
      });
    });
  },


  render: function () {


    return (
      <div>
        <Link to='listTasks' >
          <button type="button" id='list-task' style={HomeStyles.home}>Tasks</button>
        </Link>
        <div>

        </div>
      </div>
    );
  }
  })

  export default EditContainer;
