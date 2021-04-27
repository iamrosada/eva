import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AllStudent from './pages/AllStudent';

import CreateStudent from './pages/CreateSudent';

import DeleteStudent from './pages/DeleteStudent';

import EditStudent from './pages/EditStudent';
import Home from './pages/Home';

import SingIn from './pages/SingIn';
import SingOut from './pages/SingOut';

import student from './pages/Estudenty/student';
import Navbar from './components/Navbar/Navbar';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SingIn} />
      <Route path="/cadastrar" exact component={SingOut} />
      <Route path="/home" exact component={Home} />
      <Route path="/student" exact component={CreateStudent} />
      <Route path="/editstudent" exact component={EditStudent} />
      <Route path="/allstudent" exact component={AllStudent} />
      <Route path="/deletstudent" exact component={DeleteStudent} />
      <Route path="/all" exact component={student} />
      <Route path="/nav" exact component={Navbar} />
    </Switch>
  );
}

export default Routes;
