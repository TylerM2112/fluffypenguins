import React, { Component } from 'react';

import './CreateGroup.scss';

import Panel from '../../../generalcomps/Panel/Panel';
import Column from '../../../generalcomps/Column/Column';
import Button from '../../../generalcomps/Button/Button';
import MemberTitle from '../../../generalcomps/MemberTile/MemberTile';

import groupMemberImg from '../../../assets/images/me.jpeg';

export default class CreateGroup extends Component {
  constructor() {
    super();
    this.fakeProps();
    this.state = {
      userId: this.props.userId || null,
      friends: [
        { userImg: groupMemberImg, userName: 'Tyler Miller', userId: 1 },
        { userImg: groupMemberImg, userName: 'Tyler Miller', userId: 1 },
        { userImg: groupMemberImg, userName: 'Tyler Miller', userId: 1 },
        { userImg: groupMemberImg, userName: 'Tyler Miller', userId: 1 },
        { userImg: groupMemberImg, userName: 'Tyler Miller', userId: 1 },
        { userImg: groupMemberImg, userName: 'Tyler Miller', userId: 1 },
        { userImg: groupMemberImg, userName: 'Tyler Miller', userId: 1 },
        { userImg: groupMemberImg, userName: 'Tyler Miller', userId: 1 },
      ],
    }
  }

  displayFriends = () => {
    return this.state.friends.map(
      (e, i) => {
        return <MemberTitle user={e} key={i} />
      }
    )
  }

  //TODO MAKE THIS OUT WE RESOLVE PROPS AND DB CALL
  fakeProps = () => {
    this.props = {
      userId: 1,
    }
  }
  render() {
    return (
      <div className="containers-container">
        
        <div className="side-container">
        </div>

        <div className="middle-container">
        </div>

        <div className="side-container">
        </div>

      </div>
    );
  }
}