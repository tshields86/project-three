import axios from 'axios';

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
<<<<<<< HEAD
  deleteTask: function(taskName){
    return axios.delete('http://localhost:3000/api/task',taskName);
=======
  deleteTask: function(task){
    return axios.delete('http://localhost:3000/api/task/'+ task);
>>>>>>> 8d56acb9d6a7f3b28aeb5a6dbcbb482c2eb64905
  },
  updateTask: function(task){
    return axios.put('http://localhost:3000/api/task/'+ task);
  }
}


export default helpers;
