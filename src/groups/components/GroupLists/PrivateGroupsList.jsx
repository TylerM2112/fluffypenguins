import React, { Component } from 'react';

import './GroupsList.scss';

import Tile from '../../../generalcomps/Tile/Tile';

import groupMemberImg from '../../../assets/images/me.jpeg';

export default class PrivateGroupsList extends Component {
  constructor() {
    super();
    this.state = {
      showGroups: true,
    }
  }

  displayPrivate() {
    return this.props.groups.map((group, i) => {
      return <Tile groupInfo={group} key={i} />
    })
  }

  displayNoGroups() { 
    return (
      <div>
        <h1 className="headerText">you have no groups, try starting one!</h1>
      </div>
    )
  }

  render() {
    return (
      <div>
        {!!this.props.groups.length && !!this.state.showGroups> 0 ?
          <div className="group-tile-container">
            {this.displayPrivate()}
          </div>
          :
          <div>
            {this.displayNoGroups()}
          </div>
        }
      </div>
    );
  }
}

