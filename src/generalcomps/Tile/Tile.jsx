import React, { Component } from 'react';
import './Tile.scss';

import me from '../../assets/images/me.jpeg';
import coders from '../../assets/images/coders.jpg';

export default class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //All tiles use these props
      type: 'group',
      name: 'Best Coding Group Ever!',
      date: 'December 23, 2018',
      image: coders,
      founderImage: me,
      founderName: 'Tyler Miller',
      members: Math.floor(Math.random() * 15) + 1,
      //Group tiles use these props in addition
      groupId: '',
      //Event tiles use these props in addition
      eventId: '',
      eventDate: '',
      eventLocation: ''
    }
  }
  render() {
    let { type, name, date, image, founderImage, founderName, members } = this.state;

    return (
      <div className="tile-container">
        {type === 'group' ?
          <a href="/groups">
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
              <div className="bodyText founder-name">Founder: {founderName}</div>
            </div>
          </div>
        </a>
          :
          //TODO: Make 'event' tile type layout inside <a> tag.
          <a href="">
          </a>
        }
      </div>
    );
  }
}