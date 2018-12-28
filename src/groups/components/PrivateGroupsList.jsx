import React, { Component } from 'react';

import './GroupsList.scss';

import Panel from '../../generalcomps/Panel/Panel';
import Column from '../../generalcomps/Column/Column';
import Tile from '../../generalcomps/Tile/Tile';

export default class PrivateGroupsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGroups: true,
    }
  }
  render() {
    return (
      <div>
        <Panel
          justifyContent="center">
          <div className="tiles-list-label">
            <div>YOUR GROUPS</div>
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
          <div></div>
      }

      </div>
    );
  }
}