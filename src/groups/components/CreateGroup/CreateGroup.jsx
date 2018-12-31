import React, { Component } from 'react';

import './CreateGroup.scss';

import Panel from '../../../generalcomps/Panel/Panel';
import Column from '../../../generalcomps/Column/Column';
import Button from '../../../generalcomps/Button/Button';


export default class CreateGroup extends Component {
  render() {
    return (
      <div>
        <Panel flexAll>

          <Column>
            <div
              className="side-container">

            </div>
          </Column>

          <Column
            padding="5px 10px"
            justifyContent="center"
            width="50%">
            <div className="middle-container">
              <Panel
                flexAll
                flexDirection="column">
                <Column
                  flex
                  flexDirection="column"
                  flexBasis="100%">
                  <h1 className="headerText">Create a group!</h1>
                  <label>group name:</label>
                  <input></input>
                  <label>group description:</label>
                  <input></input>
                  <label>group image:</label>
                  <input></input>
                </Column>
                <Column
                  flex
                  flexDirection="column"
                  flexBasis="100%">
                <h1 className="headerText">Invite some friends to the group!</h1>
                <h1 className="headerText">TODO: Add selectable friend tiles to be added to a list sent with database addition.</h1>
                </Column>
                <Button label="CREATE GROUP"/>
              </Panel>
            </div>
          </Column>

          <Column>
            <div
              className="side-container">

            </div>
          </Column>

        </Panel>
      </div>
    );
  }
}