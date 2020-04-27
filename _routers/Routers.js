import React, {lazy} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Redirect
} from "react-router-dom";

import  User from '../_components/user-list/User';

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
const UserDetail = ()=>{
  return (<h6>User Details!</h6>)
}