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
    let taskPass = stringifyQuery(this.state.tasks);
    this.context.router.push({
      pathname: '/editTask',
      query: {
        entireObj: taskPass,
        specificValue: e.target.value
      }
    })

  },

  // map blips fxn
  pointOnMap:function(longitude, latitude, color, taskName){
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
        'marker-size': 'large',
        'marker-color': color,
        'marker-symbol': 'restaurant'
      }
    })
  },

  render: function() {
  console.log("this is the response from the backend", this.state.tasks);


  for(let tsk =0; tsk< this.state.tasks.length ; tsk++){
    console.log("fuck");
    ajaxHelpers.geoCode(this.state.tasks[tsk].location)
    .then((response)=>{
      console.log("logging responses from geocode api", response);
      let lng = response.data.results[0].geometry.location.lng;
      let lat = response.data.results[0].geometry.location.lat;
      this.pointOnMap(lng, lat, 'red', 'name');
    })
  }


  const tasksListElement = [];
  const listStyle = {
    border: "1px solid black"
  }
    for (let task in this.state.tasks) {
      tasksListElement.push(
        <div key={this.state.tasks[task]._id} style={listStyle} id={this.state.tasks[task]._id} className="task-card">
          <p><b>Task:</b> {this.state.tasks[task].taskName}</p>
          <p><b>Date:</b> {this.state.tasks[task].date}</p>
          <p><b>Time:</b> {this.state.tasks[task].time}</p>
          <p><b>Location:</b>{this.state.tasks[task].location}</p>
          <p><b>Category:</b> {this.state.tasks[task].category}</p>
          <p><b>Detail:</b> {this.state.tasks[task].detail}</p>
          <button id={this.state.tasks[task]._id}
                  value={[this.state.tasks[task].taskName,
                          this.state.tasks[task].date,
                          this.state.tasks[task].time,
                          this.state.tasks[task].location,
                          this.state.tasks[task].category,
                          this.state.tasks[task].detail]}
                  type="button" onClick={this.handleOnEdit} style={HomeStyles.button}>Edit</button><br/>
          <button id={this.state.tasks[task]._id} type="button" onClick={this.handleOnDelete} style={HomeStyles.button}>Delete</button>
        </div>
    );
  }

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
