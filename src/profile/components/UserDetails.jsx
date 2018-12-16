import React, { Component } from 'react';
import '../profile.css';
import portrait from '../../assets/images/me.jpeg';

export default class UserDetails extends Component {
  constructor() { 
    super();
    this.state = {
      
    };
  }
  render() {
    return (
       <div className="user-info-container">
    <div className="user-info-container">
      <div className="user-image-container">
        <img src={portrait} alt="me"/>
      </div>
      <div className="user-details-container">
        <p>Tyler Miller</p>
        <p>millert2420@gmail.com</p>
        <p>Friends: 24</p>
        <p>Groups: 4</p>
      </div>
    </div>
  </div>
    );
  }
}