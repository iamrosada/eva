
import {Route,Switch} from 'react-router-dom'
import AllCountry from './pages/AllCountry';
import AllRooms from './pages/AllRooms';
import AllStudent from './pages/AllStudent';
import CreateCountry from './pages/CreateCountry';
import CreateRooms from './pages/CreatedRooms';
import CreateStudent from './pages/CreateSudent';
import DeleterCountry from './pages/DeleterCountry';
import DeleterRooms from './pages/DeleterRooms';
import DeleteStudent from './pages/DeleteStudent';
import EditerCountry from './pages/EditCountry';
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
        <Route path="/createrooms" exact component={CreateRooms} />
        
        <Route path="/deleterooms" exact component={DeleterRooms} />
        <Route path="/allrooms" exact component={AllRooms} />

        <Route path="/allcountry" exact component={AllCountry} />
        <Route path="/createcountry" exact component={CreateCountry} />
        <Route path="/deletercountry" exact component={DeleterCountry} />
        <Route path="/editercountry" exact component={EditerCountry} />
    </Switch>
        

  );

}

export default Routes;