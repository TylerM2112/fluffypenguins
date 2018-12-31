import React, { Component } from 'react';

import './GroupsList.scss';

import Panel from '../../../generalcomps/Panel/Panel';
import Column from '../../../generalcomps/Column/Column';
import Tile from '../../../generalcomps/Tile/Tile';

export default class PublicGroupsList extends Component {
  constructor() {
    super();
    this.state = {
      showGroups: false,
    }
  }
  render() {
    return (
      <div>
        <Panel
          justifyContent="center">
          <div className="tiles-list-label">
            <div>PUBLIC GROUPS</div>
          </div>
        </Panel>

        {!!this.state.showGroups ?
          
          <Panel
            justifyContent="center"
            width="100%">
            <Panel
              width="100%"
              contentMargin="10px">
              <Column
                flexBasis="calc(25% - 20px)">
                <Tile />
              </Column>
              <Column
                flexBasis="calc(25% - 20px)">
                <Tile />
              </Column>
              <Column
                flexBasis="calc(25% - 20px)">
                <Tile />
              </Column>
              <Column
                flexBasis="calc(25% - 20px)">
                <Tile />
              </Column>
              <Column
                flexBasis="calc(25% - 20px)"
                className="tile-container">
                <div className="add-item">
                  <h1 className="headerText">CREATE A GROUP</h1>
                  <div className="plus-sign"></div>
                </div>
              </Column>
            </Panel>
          </Panel>

          :

          <Panel
            justifyContent="center"
            width="100%">
            <h1 className="headerText no-groups-text">You have no public groups, here are some suggested public groups to join!</h1>
            <Panel
              width="100%"
              contentMargin="10px">
              <Column
                flexBasis="calc(25% - 20px)">
                <Tile />
              </Column>
              <Column
                flexBasis="calc(25% - 20px)">
                <Tile />
              </Column>
              <Column
                flexBasis="calc(25% - 20px)">
                <Tile />
              </Column>
              <Column
                flexBasis="calc(25% - 20px)">
                <Tile />
              </Column>

              
            </Panel>
              <Column
                flex
                className="tile-container"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                flexBasis="calc(40% - 20px)"
                maxWidth="calc(40% - 20px)">
                <div className="no-groups-text">
                  <h1 className="headerText">Try creating a public group and inviting friends!</h1>
                </div>
                <div className="add-item">
                  <h1 className="headerText">CREATE A GROUP</h1>
                  <div className="plus-sign"></div>
                </div>
              </Column>
          </Panel>

        }

      </div>
    );
  }
}