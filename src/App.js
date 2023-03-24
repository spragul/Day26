import { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Nopage } from './Components/NoPage';
import UserComponent from './Components/UserComponent';
import { Switch } from 'react-router-dom';
import { AddMobile } from './Components/AddMobile';
import { MobileDetails } from './Components/mobieDetails.';
import { data } from './Data/data';
import EditMobile from './Components/EditMobileDetail';

function App() {
  const [mobile, setMobile] = useState(data)
  
  return (
    <div className="App">

      <Switch>
        <Route exact path="/">
          <UserComponent
            mobile={mobile}
            setMobile={setMobile}
          />
        </Route>

        <Route path="/addmobile">
          <AddMobile
            mobile={mobile}
            setMobile={setMobile}
          />
        </Route>
        <Route path="/edit/mobile/:id">
          <EditMobile
            mobile={mobile}
            setMobile={setMobile}
          />
        </Route>


        <Route path="/mobile/:id">
          <MobileDetails
            mobile={mobile}
          ></MobileDetails>
        </Route>

        <Route path="**">
          <Nopage />
        </Route>
      </Switch>


    </div>
  );
}

export default App;