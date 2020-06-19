import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import RecipeList from './components/RecipeList';
import About from './components/About';
import MyAccount from './components/MyAccount';
import RecipeDetails from './components/RecipeDetails';
import { authProvider } from './providers/authProvider';
import { AzureAD, AuthenticationState } from 'react-aad-msal';

import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <header>
          <nav className="navbar navbar-expand-md navbar-light bg-light">
            <a className="navbar-brand" href="/">Divine Flavours</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink exact={true} activeClassName='active' className='nav-link' to='/'>Recipes</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact={true} activeClassName='active' className='nav-link' to='/about'>About</NavLink>
                </li>
              </ul>
              <ul className="navbar-nav">

                <AzureAD provider={authProvider} forceLogin={false}>
                  {
                    ({ login, logout, authenticationState, error, accountInfo }) => {
                      switch (authenticationState) {
                        case AuthenticationState.Authenticated:
                          return (
                            <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {accountInfo.account.name}</a>
                              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/my-account">My Account</a>
                                <div className="dropdown-divider"></div>
                                <button className="btn navbar-btn line_btn" onClick={logout}>Logout</button>
                              </div>
                            </li>
                          );
                        case AuthenticationState.Unauthenticated:
                          return (
                            <li className="nav-item">
                              <button className="btn navbar-btn line_btn" onClick={login}>Login</button>
                            </li>
                          );
                        case AuthenticationState.InProgress:
                          return (
                            <li className="nav-item">
                              Logging in ...
                            </li>
                          );
                        default:
                          break;
                      }
                    }
                  }
                </AzureAD>
              </ul>
            </div>
          </nav>
        </header>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/my-account" component={MyAccount} />
          <Route path="/recipes/:id" component={RecipeDetails} />
          <Route path="/">
            <AzureAD provider={authProvider} forceLogin={false}>
              {
                ({ authenticationState }) => {
                  switch (authenticationState) {
                    case AuthenticationState.Authenticated:
                      return (<RecipeList />);
                    case AuthenticationState.Unauthenticated:
                      return (<div className="container mt-5">You need to login</div>);
                    default:
                      return (<div />);
                  }
                }
              }
            </AzureAD>
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
