import React, { Component } from 'react';
import logo from '../assets/images/mw.png';
import {Link} from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
      <div>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <Link to="/profile"><button>LOGIN</button></Link>
  </div>
    );
  };
};