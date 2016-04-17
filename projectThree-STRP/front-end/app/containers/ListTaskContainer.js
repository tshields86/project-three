import React from 'react';
import _ from 'lodash';
import ajaxHelpers from '../utils/ajaxHelpers';
import {Link} from 'react-router';
import ListTask from '../components/ListTask';
import AddTask from '../components/AddTask';
import { parse, stringify } from 'query-string';
import HomeStyles from '../styles/HomeStyles';
import kk from '../components/keys';


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
      console.log('logging tasks aka juicy stuff', response.data.tasks);
      this.setState({
        tasks: response.data.tasks
      });
    }.bind(this));



    //  calling pointOnMap
    // this.pointOnMap()


  },

  handleOnDelete(e){
    console.log('handle on delete clicked, e.targetid:', e.target.id)
    ajaxHelpers.deleteTask(e.target.id)
    .then(function(response){
      console.log("this is the response from the backend", response)
    })
  },

  handleOnEdit(e){
    e.preventDefault();
    console.log("handle on click edit");
    console.log("logging the e.target.id in ListTaskContainer", e.target.id);
    // console.log("logging in ListTaskContainer all tasks", this.state.tasks);
    // console.log("logging in ListTaskContainer one task", this.state.tasks[0]);
    // console.log("logging in ListTaskContainer one task", this.state.tasks[0].detail);

    let taskPass = this.state.tasks;
    this.context.router.push({
      pathname: '/editTask',
      query: {
        specificID: e.target.id,
        specificID: e.target.id,
        specificID: e.target.id
      }
    })
  },

  // map blips fxn
  pointOnMap:function(longitude, latitude, color, taskName, desc, taskIndex){
    console.log("doing some pointOnMap");
    L.mapbox.featureLayer({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          latitude,
          longitude
        ]
      },
      properties: {
        title: taskName,
        description:  desc,
        'marker-size': 'large',
        'marker-color': color,
        'marker-symbol': taskIndex
      }
    }).addTo(Window.map)
  },

  render: function() {

  for(let task in this.state.tasks){
    ajaxHelpers.geoCode(this.state.tasks[task].location)
    .then((response)=>{
      let taskHolder = parseInt(task)+1;
      console.log(taskHolder);
      let lat = response.data.results[0].geometry.location.lng;
      let lng = response.data.results[0].geometry.location.lat;
      let taskName = this.state.tasks[task].taskName;
      let detail = this.state.tasks[task].detail;
      this.pointOnMap(lng, lat, '#BE9A6B', taskName, detail, taskHolder);
    })
  }


  const tasksListElement = [];
  const listStyle = {
    border: "1px solid black"
  }
  this.state.tasks.map( (task, index) => {
    tasksListElement.push(
      <div key={index} style={listStyle} id={task._id} className="task-card">
              <p><b>Task:</b> {task.taskName}</p>
              <p><b>Date:</b> {task.date}</p>
              <p><b>Time:</b> {task.time}</p>
              <p><b>Location:</b>{task.location}</p>
              <p><b>Category:</b> {task.category}</p>
              <p><b>Detail:</b> {task.detail}</p>
              // <Link to={`/editTask/${task._id}`}>
              <button id={index} type="button" onClick={this.handleOnEdit} style={HomeStyles.button}>Edit</button>
              // </Link>
              <button id={task._id} type="button" onClick={this.handleOnDelete} style={HomeStyles.button}>Delete</button>
            </div>
    );
  });
//                 <button id={index} type="button" onClick={this.handleOnEdit} style={HomeStyles.button}>Edit</button><br/>
// for edit button use id={index} to go way of looping through all tasks and grabbing the values of the correct selected task (finding it by index) and run that in this file above
// for edit button use id={task._id} to send mongo id to edittaskcontainer to preform get on just one task using mongo id
//     for (let task in this.state.tasks) {
//       tasksListElement.push(
//         <div key={this.state.tasks[task]._id} style={listStyle} id={this.state.tasks[task]._id} className="task-card">
//           <p><b>Task:</b> {this.state.tasks[task].taskName}</p>
//           <p><b>Date:</b> {this.state.tasks[task].date}</p>
//           <p><b>Time:</b> {this.state.tasks[task].time}</p>
//           <p><b>Location:</b>{this.state.tasks[task].location}</p>
//           <p><b>Category:</b> {this.state.tasks[task].category}</p>
//           <p><b>Detail:</b> {this.state.tasks[task].detail}</p>
//           <button id={this.state.tasks[task]._id}
//                   name={this.state.tasks[task].taskName}
//                   value={[this.state.tasks[task].date,
//                           this.state.tasks[task].time,
//                           this.state.tasks[task].location,
//                           this.state.tasks[task].category,
//                           this.state.tasks[task].detail]}
//                   type="button" onClick={this.handleOnEdit} style={HomeStyles.button}>Edit</button><br/>
//           <button id={this.state.tasks[task]._id} type="button" onClick={this.handleOnDelete} style={HomeStyles.button}>Delete</button>
//         </div>
//     );
//   }

  return (
    <div>
      <h2>Show all Tasks</h2>
      <Link to='addTask'>
          <button type='button' className='add-btn' style={HomeStyles.button}>+</button>
      </Link>
      <ListTask tasks={tasksListElement}/>
    </div>
    )
  }
});

export default ListTaskContainer;
