import React, { Component } from 'react';
import './Groups.scss';

import PrivateGroupsList from './components/GroupLists/PrivateGroupsList';
import PublicGroupsList from './components/GroupLists/PublicGroupsList';

import groupMemberImg from '../assets/images/me.jpeg';

export default class Groups extends Component {
  constructor(props) {
    super(props);
    this.fakeProps();
    this.state = {
      groups: this.props.groups || [],
      privateGroups: [],
      publicGroups: [],
    }
  }

  fakeProps = () => {
    this.props = {
      groups: [
        {
          type: 'group',
          groupId: 1,
          groupName: 'The Best Group Ever!',
          groupCreator: 'Tyler Miller',
          groupCreatorImg: groupMemberImg,
          groupType: 'Private',
          groupImg: groupMemberImg,
          dateCreated: 'December 25, 2015',
          members: [
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 }
          ],
        },
        {
          type: 'group',
          groupId: 1,
          groupName: 'The Best Group Ever!',
          groupCreator: 'Tyler Miller',
          groupCreatorImg: groupMemberImg,
          groupType: 'Private',
          groupImg: groupMemberImg,
          dateCreated: 'December 25, 2015',
          members: [
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 }
          ],
        },
        {
          type: 'group',
          groupId: 1,
          groupName: 'The Best Group Ever!',
          groupCreator: 'Tyler Miller',
          groupCreatorImg: groupMemberImg,
          groupType: 'Private',
          groupImg: groupMemberImg,
          dateCreated: 'December 25, 2015',
          members: [
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 }
          ],
        },
        {
          type: 'group',
          groupId: 1,
          groupName: 'The Best Group Ever!',
          groupCreator: 'Tyler Miller',
          groupCreatorImg: groupMemberImg,
          groupType: 'Private',
          groupImg: groupMemberImg,
          dateCreated: 'December 25, 2015',
          members: [
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 }
          ],
        }, {
          type: 'group',
          groupId: 1,
          groupName: 'The Best Group Ever!',
          groupCreator: 'Tyler Miller',
          groupCreatorImg: groupMemberImg,
          groupType: 'Public',
          groupImg: groupMemberImg,
          dateCreated: 'December 25, 2015',
          members: [
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 }
          ],
        },
        {
          type: 'group',
          groupId: 1,
          groupName: 'The Best Group Ever!',
          groupCreator: 'Tyler Miller',
          groupCreatorImg: groupMemberImg,
          groupType: 'Public',
          groupImg: groupMemberImg,
          dateCreated: 'December 25, 2015',
          members: [
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 }
          ],
        },
        {
          type: 'group',
          groupId: 1,
          groupName: 'The Best Group Ever!',
          groupCreator: 'Tyler Miller',
          groupCreatorImg: groupMemberImg,
          groupType: 'Public',
          groupImg: groupMemberImg,
          dateCreated: 'December 25, 2015',
          members: [
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 }
          ],
        },
        {
          type: 'group',
          groupId: 1,
          groupName: 'The Best Group Ever!',
          groupCreator: 'Tyler Miller',
          groupCreatorImg: groupMemberImg,
          groupType: 'Public',
          groupImg: groupMemberImg,
          dateCreated: 'December 25, 2015',
          members: [
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 },
            { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1 }
          ],
        }
      ]
    }
  }

  componentDidMount() {
    this.sortGroups();
  }
  
  sortGroups = () => {
    let privateGroups = [];
    let publicGroups = [];

    this.state.groups.map(e => {
      console.log(e);
      if (e.groupType === 'Private') {
        privateGroups.push(e);
      }
      else if (e.groupType === 'Public') {
        publicGroups.push(e);
      }
      this.setState({
        privateGroups: privateGroups,
        publicGroups: publicGroups,
      })
    })
  }

  render() {
    return (
      <div className="containers-container">

        <div className="side-container">
        </div>

        <div className="middle-container">
          <h1 className="headerText">your private groups</h1>
          <PrivateGroupsList groups={this.state.privateGroups} />
          <h1 className="headerText">your public groups</h1>
          <PublicGroupsList groups={this.state.publicGroups} />
        </div>

        <div className="side-container">
        </div>

      </div>
    );
  }
}