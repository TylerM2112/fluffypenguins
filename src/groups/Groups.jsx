import React, { Component } from 'react';
import './Groups.scss';

import Panel from '../generalcomps/Panel/Panel';
import Column from '../generalcomps/Column/Column';
import PrivateGroupsList from './components/PrivateGroupsList';
import PublicGroupsList from './components/PublicGroupsList';

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
              <PrivateGroupsList />
              <PublicGroupsList />
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
