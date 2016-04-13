import React, { PropTypes } from 'react';
import AddTask from '../components/AddTask';

const AddContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  render: function () {
    return (
      <AddTask />
    );
  }
})

export default AddContainer;
