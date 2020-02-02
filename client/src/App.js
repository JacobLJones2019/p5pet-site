import React, { Component } from 'react';
import Navbar from '../src/components/Navbar';
import Landing from '../src/components/Landing';
import FormPage from '../src/components/FormPage';
import About from '../src/components/About';
import LoginPage from '../src/components/LoginPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



class App extends Component {

// Potentially global state of logged in

  render (){

  return (
      < Router >
        <div className ="app">

          <nav className = "navBar">
            < Navbar />
          </nav>

          < Switch >
            <Route path = "/login">
              <LoginPage />
            </Route>
            <Route path = "/createAvatar">
               <FormPage />
            </Route>
            <Route path = "/about">
              < About />
            </Route>
            < Route path = "/">
              < Landing />
            </ Route>
          </ Switch>

        </div>
      </ Router >
    );
  }
}

export default App;
