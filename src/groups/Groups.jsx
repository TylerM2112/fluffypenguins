import React, { Component } from 'react';
import './Groups.scss';

import Panel from '../generalcomps/Panel/Panel';
import Column from '../generalcomps/Column/Column';
import Tile from '../generalcomps/Tile/Tile';

export default class Groups extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
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
                justifyContent="center">
                <div class="group-text">
                  <div>YOUR GROUPS</div>
                </div>
              </Panel>

              <Panel
                justifyContent="center"
                width="100%">
                <Panel
                  width="100%"
                  contentMargin="10px">
                  <Column
                    flexBasis="calc(33% - 20px)">
                    <Tile />
                  </Column>
                  <Column
                    flexBasis="calc(33% - 20px)">
                    <Tile />
                  </Column>
                  <Column
                    flexBasis="calc(33% - 20px)">
                    <Tile />
                  </Column>
                  <Column
                    flexBasis="calc(33% - 20px)">
                    <Tile />
                  </Column>
                  <Column
                    flexBasis="calc(33% - 20px)"
                    className="tile-container">
                    <div className="add-item">
                      <h1 className="headerText">CREATE A GROUP</h1>
                      <div className="plus-sign"></div>
                    </div>
                  </Column>
                </Panel>
              </Panel>
              <Panel
                justifyContent="center">
                <div class="group-text">
                  <div>PUBLIC GROUPS</div>
                </div>
              </Panel>

              <Panel
                justifyContent="center"
                width="100%">
                <Panel
                  width="100%"
                  contentMargin="10px">
                  <Column
                    flexBasis="calc(33% - 20px)">
                    <Tile />
                  </Column>
                  <Column
                    flexBasis="calc(33% - 20px)">
                    <Tile />
                  </Column>
                  <Column
                    flexBasis="calc(33% - 20px)">
                    <Tile />
                  </Column>
                  <Column
                    flexBasis="calc(33% - 20px)">
                    <Tile />
                  </Column>
                  <Column
                    flexBasis="calc(33% - 20px)"
                    className="tile-container">
                   <div className="add-item">
                      <h1 className="headerText">CREATE A GROUP</h1>
                      <div className="plus-sign"></div>
                    </div>
                  </Column>
                </Panel>
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
