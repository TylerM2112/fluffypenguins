import React, { Component } from 'react';

import './GroupsList.scss';

import Tile from '../../../generalcomps/Tile/Tile';

export default class PublicGroupsList extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  displayPublic() { 
    if (this.props.groups && (this.props.groups.length >= 1)) {
      return this.props.groups.map((group, i) => {
        return <Tile groupInfo={group} key={i} />
      })
    }
  }

  render() {
    return (
      <div className="group-tile-container">
        {this.displayPublic()}
      </div>
    );
  }
}

