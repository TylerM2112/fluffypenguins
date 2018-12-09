import React, { Component } from 'react';

import './profile.css';
import UserDetails from './components/UserDetails';
import AddressList from './components/AddressList';
import FriendRequests from './components/FriendRequests';
import GroupRequests from './components/GroupRequests';
import EventRequests from './components/EventRequests';

export default class Profile extends Component {
  constructor() { 
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="profile-container">
    <UserDetails />
    <AddressList />
    <FriendRequests />
    <GroupRequests />
    <EventRequests />
  </div>
    );
  }
}