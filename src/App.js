import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Login from './login/login';
import Profile from './profile/profile';

const App = () =>
  (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/groups" component={Groups} />
        <Route path="/events" component={Events} />
      </Switch>
    </div>
  );

const Header = () => (
  <div>
    <image />
  </div>
)

const Groups = () => (
  <div>
    <h3>Groups</h3>
  </div>
)
const Events = () => (
  <div>
    <h3>Events</h3>
  </div>
)

export default App;
