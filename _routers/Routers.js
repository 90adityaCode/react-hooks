import React, {lazy} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import  User from lazy(()=> import('../_components/user-list/User'));

const Routers = ()=>{
  return (
    <Router>
     <Switch>
       <Route exact path="/user" component={User} />
       <Route exact path="/user/:id" component={UserDetail} />
       <Redirect from="/" to="/user" />
     </Switch>
    </Router>
  )
}

export default Routers;