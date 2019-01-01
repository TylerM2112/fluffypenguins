import React, { Component } from 'react';
import './Tile.scss';

import me from '../../assets/images/me.jpeg';
import coders from '../../assets/images/coders.jpg';

export default class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.groupInfo.type || null,
      groupType: this.props.groupInfo.type || null,
      groupId: this.props.groupInfo.groupId || null,
      name: this.props.groupInfo.groupName || null,
      date: this.props.groupInfo.dateCreated || null,
      image: coders || this.props.groupInfo.groupImg || null,
      founderImage: me || this.props.groupCreatorImg || null,
      founderName: this.props.groupInfo.groupCreator || null,
      members: this.props.groupInfo.members.length || null,
      eventId: this.props.groupInfo.eventId || null,
      eventDate: this.props.groupInfo.eventDate || null,
      eventLocation: this.props.groupInfo.eventLocation || null,
    }
  }

  render() {
    let { type, groupType, groupId, name, date, image, founderImage, founderName, members, eventId, eventDate, eventLocation } = this.state;

    return (
      <div className="">
        <div className="tile-container">
        {type === 'group' ?
          <a href={`/group/${groupId}`}>
          <div className="group-tile-info-container">
            <div className="group-tile-image" style={{ backgroundImage: `url(${image})` }} ></div>
            <div className="bodyText extra-info">
              <div>Founded: {date}</div>
              <div>Members: {members}</div>
            </div>
            <div className="headerText info-name">
              {name}
            </div>
          </div>
          <div>
            <div className="tile-founder-info">
              <img className="founder-image" src={founderImage} />
              <div className="bodyText founder-name">Founder: <span className="bold-text">{founderName}</span></div>
            </div>
          </div>
        </a>
          :
          //TODO: Make 'event' tile type layout inside <a> tag.
          <a href="">
          </a>
          }
          </div>
      </div>
    );
  }
}