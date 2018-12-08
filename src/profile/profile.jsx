import React from 'react';

import './profile.css';
import UserDetails from './components/UserDetails';
import AddressList from './components/AddressList';
import FriendRequests from './components/FriendRequests';
import GroupRequests from './components/GroupRequests';
import EventRequests from './components/EventRequests';

const Profile = () => (
  <div className="profile-container">
    <UserDetails />
    <AddressList />
    <FriendRequests />
    <GroupRequests />
    <EventRequests />
  </div>
)

export default Profile;