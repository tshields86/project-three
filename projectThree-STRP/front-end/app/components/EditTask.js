import React from 'react';
import {Link} from 'react-router';
import HomeStyles from '../styles/HomeStyles';

const AddStyle = {
  border: '1px solid black'
}

function EditTask(props) {
  console.log("edittask props: ", props);
  return (
    <div>
      <h2>Edit Task</h2>
      <div style={AddStyle}>
        <form onSubmit={props.onSubmitTask}>
          <div>
            <b>My Tasks: </b>
            <input  type='text'
                    name='mytask'
                    onChange={props.onEditTaskName}
                    value={props.thisTask.taskName} />
            <b>Date:</b>
            <input  type='date'
                    name='date'
                    className='date'
                    onChange={props.onEditDate}
                    value={props.thisTask.date} />
            <b>Location:</b>
            <input  type='text'
                    name=''
                    className='location'
                    onChange={props.onEditLocation}
                    value={props.thisTask.location} />
            <br/><br/>
            <b>Task Category:</b>
            <select name="taskCategory"
                    onChange={props.onEditCategory}
                    value={props.thisTask.category} >
              <option value="personal">Personal</option>
              <option value="school">School</option>
              <option value="work">Work</option>
              <option value="other">Other</option>
            </select>
            <br/><br/>
            <b>Time:</b>
            <input  type='time'
                    onChange={props.onEditTime}
                    value={props.thisTask.time} />
            <br/><br/>
            <b>Detail:</b>
            <br/><br/>
            <textarea name='task-description'
                      maxLength='140'
                      placeholder='(Detail description...)'
                      onChange={props.onEditDetail}
                      value={props.thisTask.detail} />
          </div>
          <br/>
          <div>
            <button className='task-update-btn'
              type='submit'
              style={HomeStyles.button}
              id={props.thisTask.taskMongoid}
              >Update (+)
            </button>
          </div>
          <Link to='listTasks'>
            <button className='done-edit-btn' type='button' style={HomeStyles.button}>Done</button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default EditTask;
