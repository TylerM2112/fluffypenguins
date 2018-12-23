import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Profile from './profile/Profile.jsx';

import Login from './login/login';

const App = () =>
  (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/profile" component={ Profile } />
      </Switch>
    </div>
  );

export default App;
