import React from 'react';
import portrait from "../assets/images/me.jpeg";

import './profile.css';

const Profile = () => (
  <div className="profile-container">
    <div className="user-info-container">
      <div className="user-image-container">
        <img src={portrait} />
      </div>
      <div className="user-details-container">
        <p>Tyler Miller</p>
        <p>millert2420@gmail.com</p>
        <p>Friends: 24</p>
        <p>Groups: 4</p>
      </div>
    </div>
    <div className="address-list-container">
      address list
    </div>
  </div>
)

export default Profile;