
import {Route,Switch} from 'react-router-dom'
import CreateStudent from './pages/CreateSudent';
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


    </Switch>
        

  );

}

export default Routes;