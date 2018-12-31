import React, { Component } from 'react';
import Panel from '../generalcomps/Panel/Panel';
import Column from '../generalcomps/Column/Column';

import './GroupDetail.scss';
import groupMemberImg from '../assets/images/me.jpeg'
import MemberTitle from '../generalcomps/MemberTile/MemberTile';
import PastEventTile from '../generalcomps/PastEventTile/PastEventTile';
export default class GroupDetail extends Component {

  constructor(props) {
    super(props);
    this.fakeProps();
    this.state = {
      groupName: this.props.groupName || '',
      groupCreator: this.props.groupCreator || '',
      groupCreatorImg: this.props.groupCreatorImg || groupMemberImg,
      groupType: this.props.groupType || 'Private',
      groupDescription: this.props.groupDescription || '',
      groupImg: this.props.groupImg || '',
      dateCreated: this.props.dateCreated || '',
      members: this.props.members || [],
      memberCount: this.props.memberCount || 0,
      pastEvents: this.props.pastEvents || [],
    }
  }

  displayMembers = () => {
   return this.state.members.map(
      (e, i) => {
        return <MemberTitle user={e} key={i} />
      }
    )
  }

  displayPastEvents = () => {
    return this.state.pastEvents.map(
      (e, i) => {
        return <PastEventTile event={e} key={i} />
      }
    )
  }

  //TODO MAKE THIS OUT WE RESOLVE PROPS AND DB CALL
  fakeProps = () => {
    this.props = {
      groupName: 'The Best Group Ever!',
      groupCreator: 'Tyler Miller',
      groupCreatorImg: groupMemberImg,
      groupType: 'Private',
      groupDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia id diam in elementum. Maecenas ut orci consectetur, venenatis lectus in, congue sem. Donec euismod quam vel urna accumsan fringilla aliquet vel sem. Pellentesque auctor nibh vitae velit congue, eu maximus neque elementum. Nullam ultricies fringilla justo, sit amet tincidunt lacus sodales vitae. Nunc convallis risus vel euismod finibus. Vivamus tristique nisl dolor, in laoreet odio porttitor gravida.',
      groupImg:  groupMemberImg,
      dateCreated:  'December 25, 2015',
      members:  [
        { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1},
        { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1},
        { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1},
        { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1},
        { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1},
        { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1},
        { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1},
        { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1},
        { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1},
        { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1},
        { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1},
        { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1},
        { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1},
        { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1},
        { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1},
        { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1},
        { userImg: groupMemberImg, userName: 'Tyler Miller', userType: 'Creator', userId: 1},
      ],
      memberCount:  0,
      pastEvents:  [
        { placeName: 'The Fuji', city: 'Phoenix', state: 'AZ', eventTime: 'December 24, 2018', attendees: 5},
        { placeName: 'The Fujiasda we ASasAS asdf fasd fas dfas df as dfs fd', city: 'Phoenix', state: 'AZ', eventTime: 'December 24, 2018', attendees: 5},
        { placeName: 'The Fuji', city: 'Phoenix', state: 'AZ', eventTime: 'December 24, 2018', attendees: 5},
        { placeName: 'The Fuji', city: 'Phoenix', state: 'AZ', eventTime: 'December 24, 2018', attendees: 5},
        { placeName: 'The Fuji', city: 'Phoenix', state: 'AZ', eventTime: 'December 24, 2018', attendees: 5},
        { placeName: 'The Fuji', city: 'Phoenix', state: 'AZ', eventTime: 'December 24, 2018', attendees: 5},
      ],

    }
  }

  render() {
    return (
      <div>
        <Panel flexAll>

        <Column>
          <div 
            className="side-container"></div>

        </Column>
        
        <Column
          justifyContent="center" 
          width="50%">
          <div className="group-details-container">
            <div className="group-header-container">
              <div>
                <img src="https://secure.meetupstatic.com/photos/event/4/f/d/6/highres_477260438.jpeg" alt="group"/>

                </div>
                <p className="headerText group-header-text">{ this.state.groupName }</p>

                <div class="group-details">
                  <div>
                    <img src={ this.state.groupCreatorImg } alt="tyler miller"/>
                   <span className="bodyText grey-text">Created By: { this.state.groupCreator }</span>
                  </div>
                  <span className="bodyText grey-text">Founded On: { this.state.dateCreated }</span>
                  <span className="bodyText grey-text">Members: { this.state.memberCount }</span>
                  <span className="bodyText grey-text">{ this.state.groupType }</span>
                </div>
            </div>
          <div className="group-info-container">
            <div>
            <div className="details-container">
            <p className="headerText" style={{ fontSize: '20px', fontWeight: 700}}>Details</p>
            <p className="bodyText"> { this.state.groupDescription }</p>
            </div>
            <div className="details-container">
            <p className="headerText" style={{ fontSize: '20px', fontWeight: 700}}>THE BEST GROUP EVER! Past Events</p>
            <div className="double-container">
              <div>
              <div className="past-event-container-flex">
               { this.displayPastEvents() }
              </div>
            </div>
            </div>
            </div>
            </div>
           <div className="members-container">
            <p className="headerText" style={{ fontSize: '20px', fontWeight: 700}}>Members({ this.state.memberCount })</p>

            <div className="member-comp-container">
             
                { this.displayMembers() }
            </div>
           </div>
          </div>

          </div>
        </Column>

        <Column>
          <div 
            className="side-container"></div>
        </Column>

      </Panel>
      </div>
    );
  }
}