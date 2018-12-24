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

              asdasd

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
                    <div className="add-item"><p>+</p></div>
                  </Column>
                </Panel>
              </Panel>

            </div>
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
