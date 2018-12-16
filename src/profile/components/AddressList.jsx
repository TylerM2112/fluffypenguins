import React, { Component } from 'react';


import '../profile.css';
import Panel from '../../generalcomps/Panel';

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