import React, { Component } from 'react';
import Panel from '../generalcomps/Panel/Panel';
import Column from '../generalcomps/Column/Column';

import './GroupDetail.scss';
import groupMemberImg from '../assets/images/me.jpeg'
export default class GroupDetail extends Component {
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
                <p className="headerText group-header-text">THE BEST GROUP EVER!</p>

                <div class="group-details">
                  <div>
                    <img src={ groupMemberImg } alt="tyler miller"/>
                   <span className="bodyText grey-text">Created By: Tyler Miller</span>
                  </div>
                  <span className="bodyText grey-text">Founded On: December, 24, 2018</span>
                  <span className="bodyText grey-text">Members: 5</span>
                </div>
            </div>
          <div className="group-info-container">
            <div>
            <div className="details-container">
            <p className="headerText" style={{ fontSize: '20px', fontWeight: 700}}>Details</p>
            <p className="bodyText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia id diam in elementum. Maecenas ut orci consectetur, venenatis lectus in, congue sem. Donec euismod quam vel urna accumsan fringilla aliquet vel sem. Pellentesque auctor nibh vitae velit congue, eu maximus neque elementum. Nullam ultricies fringilla justo, sit amet tincidunt lacus sodales vitae. Nunc convallis risus vel euismod finibus. Vivamus tristique nisl dolor, in laoreet odio porttitor gravida.</p>
            </div>
            </div>
           <div className="members-container">
            <p className="headerText" style={{ fontSize: '20px', fontWeight: 700}}>Attendees(5)</p>

            <div className="member-comp-container">
              <div className="member-comp">
                <img src={ groupMemberImg } alt="" style={{ width: '70px', borderRadius: '50%'}} />
                <p className="headerText" style={{ fontWeight: 700}}>Tyler Miller</p>
                <p className="bodyText grey-text">Creator</p>
              </div>
              <div className="member-comp">
                <img src={ groupMemberImg } alt="" style={{ width: '70px', borderRadius: '50%'}} />
                <p className="headerText" style={{ fontWeight: 700}}>Tyler Miller</p>
                <p className="bodyText grey-text">Creator</p>
              </div>
              <div className="member-comp">
                <img src={ groupMemberImg } alt="" style={{ width: '70px', borderRadius: '50%'}} />
                <p className="headerText" style={{ fontWeight: 700}}>Tyler Miller</p>
                <p className="bodyText grey-text">Creator</p>
              </div>
              <div className="member-comp">
                <img src={ groupMemberImg } alt="" style={{ width: '70px', borderRadius: '50%'}} />
                <p className="headerText" style={{ fontWeight: 700}}>Tyler Miller</p>
                <p className="bodyText grey-text">Creator</p>
              </div>
              <div className="member-comp">
                <img src={ groupMemberImg } alt="" style={{ width: '70px', borderRadius: '50%'}} />
                <p className="headerText" style={{ fontWeight: 700}}>Tyler Miller</p>
                <p className="bodyText grey-text">Creator</p>
              </div>
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