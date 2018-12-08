import React, { Component } from 'react';
import mwSmall from '../../assets/images/mwLogoSmall.png';

import '../profile.css';

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


class AddressList extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="address-list-container">
        <h1>ADDRESS LIST</h1>
        {alist.map(address => {
          return (
            <div className="address-panel">
              <button>SET AS DEFAULT</button>
              {address.favorited ?
                <div className="favorited-logo">
                  <img src={mwSmall} alt="defaultSymbol" />
                </div>
                :
                <div></div>
              }
              <div>
                {address.label}: {address.address + " " + address.address2 + ", " + address.city + ", " + address.state + ", " + address.zip}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
};

export default AddressList;