import React, { Component } from 'react';
import './Tile.scss';

import me from '../../assets/images/me.jpeg';
import coders from '../../assets/images/coders.jpg';

export default class Tile extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Best Coding Group Ever',
      date: 'Sunday, December 23, 2018',
      image: coders,
      founderImage: me,
      founderName: 'Tyler Miller',
      members: '',
    }
  }
  render() {
    let { name, date, image, founderImage, founderName, members } = this.state;

    return (
      <div className="tile-container">

        <a href="/groups">
          <div className="info-container">
            <div className="tile-image" style={{ backgroundImage: `url(${image})` }} ></div>
            <div className="bodyText info-date">
              Founded: {date}
            </div>
            <div className="headerText info-name">
              {name}
            </div>
          </div>
        </a>

        <div>
          <div className="founder-info">
            <img className="founder-image" src={founderImage} />
            <div className="bodyText founder-name">Hosted by: {founderName}</div>
          </div>
        </div>

      </div>
    );
  }
}