import React, { Component } from 'react';
import '../profile.css';
import me from '../../assets/images/me.jpeg';

let friendRequest = [
  {
    image: me,
    name: "Charlie Reynolds",
  },
  {
    image: me,
    name: "Charlie Reynolds",
  },
  {
    image: me,
    name: "Charlie Reynolds",
  },
];


class FriendRequests extends Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    return (
      <div className="friend-requests-container">
        <h1>FRIEND REQUESTS</h1>
        {friendRequest.map(request => {
          return (
            <div className="friend-request-panel">
              <div className="friend-image-container">
                <img src={request.image} />
              </div>
              <div>
                {request.name}
              </div>
              <button>Confirm</button>
              <button>Decline</button>
            </div>
          )
        })}
      </div>
    )
  }
};

export default FriendRequests;