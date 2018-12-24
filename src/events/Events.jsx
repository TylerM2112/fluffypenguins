import React, { Component } from 'react';
import Panel from '../generalcomps/Panel/Panel';
import Column from '../generalcomps/Column/Column';
import './Events.scss';  

export default class Events extends Component {
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
          width="50%">
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
