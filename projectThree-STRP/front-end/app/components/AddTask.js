import React from 'react';
import {Link} from 'react-router';
import ListTask from './ListTask';
import HomeStyles from '../styles/HomeStyles';


const AddStyle = {
  border: '1px solid black'
}

function AddTask(props) {
  return (
    <div>
      <Link to='listTasks'>
        <button type="button" id='list-task' style={HomeStyles.button}>Tasks</button>
      </Link>
      <h2>Add Task</h2>
      <div style={AddStyle}>
        <form onSubmit={props.onSubmitTask}>
          <div>
            <p><b>My Tasks: </b><br/><input type='text' name='mytask'  onChange={props.onAddTaskName}/></p>
            <b>Date:</b> <input type='date' name='date' className='date'  onChange={props.onAddDate}/>
              <br/><br/>
            <b>Location:</b> <input type='text' name='' className='location' onChange={props.onAddLocation}/>
              <br/><br/>
            <b>Task Category:</b>
            <br/>
            <select name="taskCategory" onChange={props.onAddCategory}>
              <option value="personal">Personal</option>
              <option value="school">School</option>
              <option value="work">Work</option>
              <option value="other">Other</option>
            </select>
              <br/><br/>
            <b>Time:</b>
              <br/>
            <input type='time' onChange={props.onAddTime}/>
              <br/>
              <br/>
            <b>Detail:</b>
              <br/>
            <textarea name='task-description'
                      maxLength='140'
                      placeholder='(Detail description...)'
                      onChange={props.onAddDetail}/>
          </div>
            <br/>
          <div>
            <button className='task-add-btn'
                    type='submit'
                    style={HomeStyles.button}
                    onClick={props.onSubmitTask}
                    >ADD
                </button>

            <br/>
            <br/>
          </div>
        </form>
        {props.tasks}
      </div>
    </div>
  )
}

export default AddTask;
