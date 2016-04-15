import React from 'react';
import {Link} from 'react-router';

const AddStyle = {
  border: '1px solid navy'
}

function EditTask(props) {
  return (
    <div>
      <h2>Edit Task</h2>
      <div style={AddStyle}>
        <form onSubmit={props.onSubmitTask}>
          <div>
            <p><b>My Tasks: </b><br/><input type='text' name='mytask'  onChange={props.onEditTaskName}/></p>
            Date: <input type='date' name='date' className='date'  onChange={props.onEditDate}/>
            <br/><br/>
            Location: <input type='text' name='' className='location' onChange={props.onEditLocation}/>
            <br/><br/>
            Task Category:
            <br/>
            <select name="taskCategory" onChange={props.onEditCategory}>
              <option value="personal">Personal</option>
              <option value="school">School</option>
              <option value="work">Work</option>
              <option value="other">Other</option>
            </select>
            <br/><br/>
            Time:
            <br/>
            <input type='time' onChange={props.onEditTime}/>
            <br/><br/>
            Detail:
            <br/>
            <textarea name='task-description'
                      maxLength='140'
                      placeholder='(Detail description...)'
                      onChange={props.onEditDetail}/>
          </div>
          <br/>
          <div>
              <button className='task-update-btn' type='submit'>Update Task(+)</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditTask;
