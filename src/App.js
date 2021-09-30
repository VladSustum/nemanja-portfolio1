import react from 'react';
import './App.css';
import {HashRouter as Router, Switch, Route, useLocation, HashRouter, NavLink} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Onama from './components/Onama';
import Kontakt from './components/Kontakt/Kontakt';

import { homeObjOne } from './components/Onama/OnamaData';


const NoMatch = () => {
  const { pathname } = useLocation()

  return <h1>No match for <code>{pathname}</code></h1>

}

function App() {
  return (
    <>
    <HashRouter>
     <Navbar />
     <Switch>
       <Route path='/' exact component=
       {Home} />
      <Switch>
       <Route path='/onama'>  <Onama {...homeObjOne}/> </Route>
       <Route path='/kontakt' component={Kontakt} />
       <Route path='*' component={NoMatch} />
       </Switch> 
       </Switch>
     </HashRouter>
     </>
  );
}

export default App;
