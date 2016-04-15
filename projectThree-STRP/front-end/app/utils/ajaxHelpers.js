import axios from 'axios';

const helpers = {
  getTasks: function(){
    // fetch some data from using a promise
    return axios.get('http://localhost:3000/api/tasks');
  },
  getTask: function(){
    return axios.get('http://localhost:3000/api/task')
  },
  addTask: function(task){
    return axios.post('http://localhost:3000/api/task', task);
  },
  deleteTask: function(taskName){
    return axios.delete('http://localhost:3000/api/task',taskName);
  },
  updateTask: function(task){
    return axios.put('http://localhost:3000/api/task', task);
  }
}


export default helpers;
