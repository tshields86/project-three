import React from 'react';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
//routing
import Main from '../components/Main';
import Home from '../components/Home';
import AddContainer from '../containers/AddContainer';
import DeleteContainer from '../containers/DeleteContainer';
import ListTaskContainer from '../containers/ListTaskContainer';
import EditTaskContainer from '../containers/EditTaskContainer';

//jsx router. tell our data cop where to send our data
const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='addTask' component={AddContainer}/>
      <Route path='listTasks' component={ListTaskContainer}/>
<<<<<<< HEAD
      <Route path= 'deleteTask'component={DeleteContainer}/>
=======
      <Route path='editTask'>
          <Route path='/editTask/:id' component={EditTaskContainer}></Route>
      </Route>
>>>>>>> 8d56acb9d6a7f3b28aeb5a6dbcbb482c2eb64905
    </Route>
  </Router>
);

export default routes;
