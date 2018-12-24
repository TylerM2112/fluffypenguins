import React, { Component } from 'react';
import Panel from '../generalcomps/Panel/Panel';
import Column from '../generalcomps/Panel/Column';
import './Profile.scss';  
export default class Profile extends Component {
  render() {
    return (
      <div>
        <Panel flexAll>

        <Column>
          <div 
            className="side-container">

          asdasd

          </div>

        </Column>
        
        <Column
          padding="5px 10px"
          justifyContent="center" 
          width="60%">
            middle
        </Column>

        <Column>
          <div 
            className="side-container">
            asdasd
          </div>
        </Column>

      </Panel>

      </div>
    );
  }
}