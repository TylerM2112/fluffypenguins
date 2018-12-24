import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Profile from './profile/Profile.jsx';

import Login from './login/login';
import Header from './header/Header';
import Groups from './groups/Groups';
import Events from './events/Events';
import Friends from './friends/Friends';

const App = () =>
  (
    <div className="App">
    <Header></Header>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/groups" component={ Groups } />
        <Route exact path="/events" component={ Events } />
        <Route exact path="/friends" component={ Friends } />
      </Switch>
    </div>
  );

export default App;
