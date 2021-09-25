import './App.css';
import Signup from './components/Signup'
import Login from './components/Login'
import Landing from './components/Landing'
import Uploadfile from './components/Uploadfile'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import React from 'react';
function App() {
  return (
  <div className="container"> 
  <Router> 
    <Route exact path="/" component = {Landing}/>
    <Switch>
    
    <Route exact path="/signup-user" component={Signup}/>
    <Route exact path="/login-user" component={Login}/>
    <Route exact path="/upload-file" component={Uploadfile}/>

    </Switch>

  </Router>

  </div> )
}

export default App;
