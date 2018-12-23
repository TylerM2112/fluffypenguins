import React, { Component } from 'react';
import Panel from '../generalcomps/Panel/Panel';
import Column from '../generalcomps/Panel/Column';
import './Profile.scss';
import profileImg from '../assets/images/me.jpeg';
import logo from '../assets/images/mwLogoSmall.png';
export default class Profile extends Component {
  render() {
    return (
      <div>
      <div className="profile-outer-container">
        <div className="profile-container">
          <Panel
            flexAll
            justifyContent="space-between"
            contentMargin="10px">
            <Column>
              <img src={ logo } alt="logo" />
            </Column>
            <Column justifyContent="center">
              <Panel
                justifyContent="space-around"
                width="100%"
              >
                <Column><span className="headerText">Groups</span></Column>
                <Column><span className="headerText">Friends</span></Column>
                <Column><span className="headerText">Events</span></Column>
              </Panel>
            </Column>
            <Column justifyContent='flex-end'>
              <img className="profile-image" src={ profileImg } alt='' />
              <div className="flex-column">
              <span className="headerText" style={{ fontSize: '20px', textAlign: 'center' }}>Tyler Miller</span>
              <span className="bodyText" style={{ fontSize: '14px', textAlign: 'right' }}>tmiller2112@gmail.com</span>
              </div>
            </Column>
          </Panel>
        </div>
      </div>
      <div className="content-container">
        <div>
        asdasad
        </div>
      </div>
      </div>
    );
  }
}
