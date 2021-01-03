import react from 'react';
import './App.css';
import {HashRouter as Router, Switch, Route, useLocation, HashRouter} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Portfolio from './components/Portfolio';
import Onama from './components/Onama'
import Kontakt from './components/Kontakt/Kontakt';
import Usluge from './components/Usluge';

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
       <Route path='/portfolio' component={Portfolio} />
       <Route path='/onama'  component={Onama} />
       <Route path='/kontakt' component={Kontakt} />
       <Route path='/usluge' component={Usluge} />
       <Route path='*' component={NoMatch} ></Route>
     </Switch>
     </HashRouter>
     </>
  );
}

export default App;
