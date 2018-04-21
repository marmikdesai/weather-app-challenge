import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import LoginRegister from '../loginRegister/LoginRegister';
import User from '../user/User';
import './Navigation.scss';

const Home = () => (
  <div>
    <h2>Welcome to Weather app</h2>
  </div>
);

const NoMatch = ({ location }) => (
  <div>
    <img src="https://cdn.dribbble.com/users/1022481/screenshots/3018253/404-snow.gif" />
  </div>
);

const Navigation = () => (
  <Router>
    <div className="Wrapper">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/loginregister">Login Register</Link></li>
        <li><Link to="/user">User Page</Link></li>
      </ul>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/loginregister" component={LoginRegister} />
        <Route path="/user" component={User} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default Navigation;
