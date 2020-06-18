import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import RecipeList from './components/RecipeList';
import About from './components/About';
import HeaderAuth from './components/HeaderAuth';
import { authProvider } from './providers/authProvider';
import { AzureAD, AuthenticationState } from 'react-aad-msal';

import './App.css';

function App() {

  return (
    <Router>
      <div className="App">

        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="navbar w-100 order-1 order-md-0">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">About</Link>
                </li>
              </ul>
            </div>
            <div className="navbar w-100 order-3">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <HeaderAuth />
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <div className="bradcam_area bradcam_bg_1">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="bradcam_text text-center">
                  <h3>Divine Flavours</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="recepie_area plus_padding">
          <div className="container">
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <AzureAD provider={authProvider} forceLogin={false}>
                  {
                    ({ authenticationState }) => {
                      switch (authenticationState) {
                        case AuthenticationState.Authenticated:
                          return (<RecipeList />);
                        case AuthenticationState.Unauthenticated:
                          return (<div>You need to login</div>);
                        default:
                          return (<div />);
                      }
                    }
                  }
                </AzureAD>
              </Route>
            </Switch>
          </div>
        </div>

        <footer className="footer">

          <div className="copy-right_text">
            <div className="container">
              <div className="footer_border"></div>
              <div className="row align-items-center">
                <div className="col-xl-8 col-md-8">
                  <p className="copy_right">Copyright 2020 All rights reserved</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
