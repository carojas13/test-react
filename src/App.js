import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './componets/About.js'
const root = document.getElementById('root');

function App() {
  return (
    <>
    <div className='App'>
      <h1>JamShare</h1>
    </div>
    <Router>
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand"></a>
      <li className="nav-item">
          <Link to ='/'>Home</Link>
      </li>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to ="/about">About</Link>
        </li>
      </ul>
    </nav>
      <Switch>
        <Route path exact ="/">
          <Home />
        </Route>
        <Route path ="/About">
          <About />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

function Home(){
  return(
    <>
      <div className="Home">
        <h2>Hello, welcome to this React application</h2>
      </div>
    </>
  );
}

export default App;
