import React from 'react';
import './PastEventTile.scss';
const PastEventTile = (props) => {
  let { placeName, city, state, eventTime, attendees} = props.event;
  return (
    <div className="past-event-container bodyText">
      <div className="event-place-container">
        <div className="headerText">{ placeName }</div> 
        <div className="address-container bodyText">{ city }, { state }</div>
      </div>
      <div className="additional-info">
        <div className="grey-text">{ eventTime }</div>
        <div className="grey-text">Attendees: { attendees }</div>
      </div>
    </div>
  );
};

export default PastEventTile;