import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Panel from '../generalcomps/Panel/Panel';
import Column from '../generalcomps/Column/Column.jsx';

import profileImg from '../assets/images/me.jpeg';
import logo from '../assets/images/mwLogoSmall.png';
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
      <Panel
        flexAll
        gutters="5px 0px">

      <Column
        contentY="center">
            <img src={logo} alt="logo" />
            <div>Middlewhere</div>
      </Column>

      <Column
        justifyContent="space-around"
        contentY="center">
        <Link to="/friends" className="headerText">Friends</Link>
        <Link to="/groups" className="headerText">Groups</Link>
        <Link to="/events" className="headerText">Events</Link>

      </Column>

      <Column
        contentY="center"
        justifyContent="flex-end">
      
        <img className="profile-image" src={ profileImg } alt='' />

        <Column
        contentY="center"
          flexDirection="column">
          
        <span className="headerText" style={{ fontSize: '20px', textAlign: 'center' }}>Tyler Miller</span>
        <span className="bodyText" style={{ fontSize: '14px', textAlign: 'right' }}>tmiller2112@gmail.com</span>

        </Column>

      </Column>
    </Panel>
    </div>
    );
  }
}