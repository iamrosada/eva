
import {Route,Switch} from 'react-router-dom'
import AllStudent from './pages/AllStudent';
import CreateStudent from './pages/CreateSudent';
import DeleteStudent from './pages/DeleteStudent';
import EditStudent from './pages/EditStudent';
import Home from './pages/Home';

import SingIn from './pages/SingIn'
import SingOut from './pages/SingOut';

function Routes(){

  return (
         
    <Switch>
       
        <Route path="/" exact component={SingIn} />
        <Route path="/cadastrar" exact component={SingOut} />
        <Route path="/home" exact component={Home} />
        <Route path="/student" exact component={CreateStudent} />
        <Route path="/editstudent" exact component={EditStudent} />
        <Route path="/allstudent" exact component={AllStudent} />
        <Route path="/deletstudent" exact component={DeleteStudent} />


    </Switch>
        

  );

}

export default Routes;