import React from 'react';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
//routing
import Main from '../components/Main';
import Home from '../components/Home';


//jsx router. tell our data cop where to send our data
const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

  export default routes;
