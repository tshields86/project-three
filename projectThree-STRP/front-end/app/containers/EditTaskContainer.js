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

  // componentWillMount: function() {
  //   console.log('component will mount');
  // },
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
  //
  // componentDidMount: function() {
  //   const query = this.props.location.query
  // },
  // componentDidMount: function() {
  //   let AddStyle = {
  //     border: '1px solid black'
  //   };
  //   let editForm = [];
  //   let editpush = function (){
  //     editForm.push(
  //     <div key={0}>
  //       <h2>Edit Task</h2>
  //       <div style={AddStyle}>
  //         <form >
  //           <div>
  //             <p><b>My Tasks: </b><br/><input type='text' name='mytask' /></p>
  //             Date: <input type='date' name='date' className='date'  />
  //             <br/><br/>
  //             Location: <input type='text' name='' className='location' />
  //             <br/><br/>
  //             Task Category:
  //             <br/>
  //             <select name="taskCategory"  >
  //               <option value="personal">Personal</option>
  //               <option value="school">School</option>
  //               <option value="work">Work</option>
  //               <option value="other">Other</option>
  //             </select>
  //             <br/><br/>
  //             Time:
  //             <br/>
  //             <input type='time' />
  //             <br/><br/>
  //             Detail:
  //             <br/>
  //             <textarea name='task-description'
  //                       maxLength='140'
  //                       placeholder='(Detail description...)'
  //                        />
  //           </div>
  //           <br/>
  //           <div>
  //               <button className='task-update-btn' type='submit'>Update Task(+)</button>
  //           </div>
  //         </form>
  //       </div>
  //     </div>
  //   )
  //   };
  //   editpush();
  //   console.log("this is the edit form!!!", editForm);
  //
  //     // this.setState({
  //     //   thisTask: "hello"
  //     // })
  // },





  render: function () {


      // ajaxHelpers.getTask(this.props.params.id)
      // .then((response)=>{
      //   console.log('response getThisTask:', response);
      //   // this.setState({
      //   //   tasks: response
      //   // });
      //   return response
      // });

      // console.log("state tasks: ", this.state.tasks.data.taskName);


    // console.log("logging in EditTaskContainer the passed info", this.props.location.query);


    const AddStyle = {
      border: '1px solid black'
    };
    const editForm = [];
    let editpush = function (){
      editForm.push(
      <div key={0}>
        <h2>Edit Task</h2>
        <div style={AddStyle}>
          <form >
            <div>
              <p><b>My Tasks: </b><br/><input type='text' name='mytask' /></p>
              Date: <input type='date' name='date' className='date'  />
              <br/><br/>
              Location: <input type='text' name='' className='location' />
              <br/><br/>
              Task Category:
              <br/>
              <select name="taskCategory"  >
                <option value="personal">Personal</option>
                <option value="school">School</option>
                <option value="work">Work</option>
                <option value="other">Other</option>
              </select>
              <br/><br/>
              Time:
              <br/>
              <input type='time' />
              <br/><br/>
              Detail:
              <br/>
              <textarea name='task-description'
                        maxLength='140'
                        placeholder='(Detail description...)'
                         />
            </div>
            <br/>
            <div>
                <button className='task-update-btn' type='submit' style={HomeStyles.button}>Update Task(+)</button>
            </div>
          </form>
        </div>
      </div>
    )
    };
    editpush();
    console.log("this is the edit form!!!", editForm);



    return (
      <div>
        <Link to='listTasks' >
          <button type="button" id='list-task' style={HomeStyles.home}>Tasks</button>
        </Link>
        <div>
          {editForm}
        </div>
      </div>
    );
  }
  })

  export default EditContainer;
