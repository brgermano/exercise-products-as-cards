import React, { Component } from 'react';
import M from 'materialize-css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import List from '../List';

class Home extends Component {
  componentDidMount() {
    M.Sidenav.init(document.querySelectorAll('.sidenav'));
  }

  render() {
    return (
      <BrowserRouter>
        <header className="afnpro-test-header z-depth-2 row">
          <Helmet>
            <title>Home</title>
          </Helmet>
          <nav>
            <nav className=" blue lighten-1">
              <div className="nav-wrapper">
                <Link to="/">
                  <div className="col s12">
                    <img src="images/logo.png" className="brand-logo" height="56" alt="afnpro" />
                  </div>
                </Link>
                <button type="button" data-target="mobile-nav" className="sidenav-trigger btn-flat hide-on-large-only	">
                  <i className="material-icons">menu</i>
                </button>
                <ul className="right hide-on-med-and-down">
                  <li>
                    <Link to="/list">List</Link>
                  </li>
                </ul>
              </div>
            </nav>

            <ul className="sidenav" id="mobile-nav">
              <li>
                <Link to="/list">List</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/list/:listId" component={List} />
            <Route path="/list" component={List} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default Home;
