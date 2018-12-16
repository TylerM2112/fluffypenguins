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
        <AddressList address={alist}/>
    <FriendRequests />
    <GroupRequests />
    <EventRequests />
  </div>
    );
  }
}

const alist = [
  {
    label: "Home",
    address: "19920 N 23rd Ave",
    address2: "#2045",
    city: "Phoenix",
    state: "AZ",
    zip: 85027,
    favorited: true,
  },
  {
    label: "Work",
    address: "19920 N 23rd Ave",
    address2: "#2045",
    city: "Phoenix",
    state: "AZ",
    zip: 85027,
    favorited: false,
  },
  {
    label: "School",
    address: "19920 N 23rd Ave",
    address2: "#2045",
    city: "Phoenix",
    state: "AZ",
    zip: 85027,
    favorited: false,
  },
];