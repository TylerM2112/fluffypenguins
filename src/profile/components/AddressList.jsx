import React, { Component } from 'react';
import mwSmall from '../../assets/images/mwLogoSmall.png';

import '../profile.css';


class AddressList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { address } = this.props
    return (
      <div className="address-list-container">
        <h1>ADDRESS LIST</h1>
        {address.map(listing => { 
          return (
            <Panel address={listing} />
          )
        })}
      </div>
    )
  }
};

export default AddressList;