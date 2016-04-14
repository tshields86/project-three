import React from 'react';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
//routing
import Main from '../components/Main';
import Home from '../components/Home';
import AddContainer from '../containers/AddContainer';
import ListTaskContainer from '../containers/ListTaskContainer';
import EditTaskContainer from '../containers/EditTaskContainer';


//jsx router. tell our data cop where to send our data
const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='addTask' component={AddContainer}/>
      <Route path='listTasks' component={ListTaskContainer}/>
      <Route path='editTask' component={EditTaskContainer}/>
    </Route>
  </Router>
);

export default routes;
