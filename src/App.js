import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Upload from './Upload';
import Newpage from './Newpage';

function App()
{
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Upload}/>
        <Route  exact path="/newpage" component={Newpage}/>
      </Switch>
    </Router>
  )
}
export default App;