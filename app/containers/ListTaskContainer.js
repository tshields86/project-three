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

  componentDidUpdate: function() {

    // this.reblip();
  },

  componentDidMount: function() {
    ajaxHelpers.getTasks()
    //TODO show my tasks
    .then(function(response){
      this.setState({
        tasks: response.data.tasks
      });
    }.bind(this));
    // this.reblip();
  },

  handleOnDelete(e){
    ajaxHelpers.deleteTask(e.target.id)
    .then(function(response){
    })
    setTimeout(()=>{this.context.router.push({pathname: '/deleteTask'})}, 10)
  },

  handleOnEdit(e){
    e.preventDefault();
    let taskPass = this.state.tasks;
    this.context.router.push({
      pathname: '/editTask',
      query: {
        specificIndex: e.target.id,
        taskMongoid: this.state.tasks[e.target.id]._id,
        taskName: this.state.tasks[e.target.id].taskName,
        date: this.state.tasks[e.target.id].date,
        time: this.state.tasks[e.target.id].time,
        location: this.state.tasks[e.target.id].location,
        category: this.state.tasks[e.target.id].category,
        detail: this.state.tasks[e.target.id].detail
      }
    })
  },

  // map blips fxn
  pointOnMap:function(longitude, latitude, color, taskName, desc, taskIndex){
    L.mapbox.marker({
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

  reblip: function(){
    let markers = [];
    for(let task in this.state.tasks){
      ajaxHelpers.geoCode(this.state.tasks[task].location)
      .then((response)=>{
        let taskHolder = parseInt(task)+1;
        let lat = response.data.results[0].geometry.location.lng;
        let lng = response.data.results[0].geometry.location.lat;
        let taskName = this.state.tasks[task].taskName;
        let detail = this.state.tasks[task].detail;
        markers.push(this.pointOnMap(lng, lat, '#0073E5', taskName, detail, taskHolder) );
      });
      }
  },

  render: function() {

  this.reblip();
  const tasksListElement = [];
  const listStyle = {
    border: "1px solid black"
  }
  this.state.tasks.map( (task, index) => {
    tasksListElement.push(
      <div key={index} style={listStyle} id={task._id} className="task-card">
              <p><b>Task: </b> {task.taskName}</p>
              <p><b>Date: </b> {task.date}</p>
              <p><b>Time: </b> {task.time}</p>
              <p><b>Location: </b>{task.location}</p>
              <p><b>Category: </b> {task.category}</p>
              <p><b>Detail: </b> {task.detail}</p>
              <button id={index} type="button" onClick={this.handleOnEdit} style={HomeStyles.button}>&#x270D;</button>
              <button id={task._id} type="button" onClick={this.handleOnDelete} style={HomeStyles.button}>&#10005;</button>
            </div>
    );
  });

  return (
    <div>
      <h2>Show all Tasks</h2>
      <Link to='/'>
          <button type="button" id='home' style={HomeStyles.home}>&#x25B2;</button>
      </Link>
    <br></br>
      <Link to='addTask'>
          <button type='button' className='add-btn' style={HomeStyles.button}>&#x2b;</button>
      </Link>
      <ListTask tasks={tasksListElement}/>
    </div>
    )
  }
});

export default ListTaskContainer;
