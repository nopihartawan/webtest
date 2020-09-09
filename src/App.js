import React from 'react';
import './App.css';
import {
 BrowserRouter as Router,
 Switch,
 Route,
} from "react-router-dom";
import Home from './home';
import Register from './register';

function App() {
  return (
    <Router basename='/webtest2'>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/register'>
          <Register/>
        </Route>
      </Switch>
    </Router>
  );
 }
 
export default App;