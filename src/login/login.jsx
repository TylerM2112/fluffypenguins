import React from "react";
import logo from '../assets/images/mw.png';
import {Link} from 'react-router-dom';

const Login = () => (
  <div>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <Link to="/profile"><button>LOGIN</button></Link>
  </div>
)

export default Login;