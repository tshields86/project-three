import axios from 'axios';
import kk from '../components/keys.js';

const helpers = {
  getTasks: function(){
    // fetch some data from using a promise
    return axios.get('http://localhost:3000/api/tasks');
  },
  getTask: function(task){
    return axios.get('http://localhost:3000/api/task/'+ task);
  },
  addTask: function(task){
    return axios.post('http://localhost:3000/api/task', task);
  },
  deleteTask: function(task){
    return axios.delete('http://localhost:3000/api/task/'+ task);
  },
  updateTask: function(task){
    return axios.put('http://localhost:3000/api/task/'+ task);
  },
  geoCode: function(address){
    return axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + address +',+New+York,+NY&key=' + kk.goog);
  },
}

export default helpers;
