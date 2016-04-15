import React from 'react';

function Delete(props){
  return (
    <div className="">
      <form onSubmit={this.onSubmitrecord}>
        <div className="">
          <input
            className=""
            placeholder="enter task"
            value=""
            type="text" />
          // <button  value={this.state.task} onClick={this.props.onChangerecord} type="button">Delete</button>
          // <button  value={this.state.task} onClick={this.props.onSubmitrecord} type="button">Submit</button>
      </div>
      </form>
    </div>
  );
}


export default Delete;
