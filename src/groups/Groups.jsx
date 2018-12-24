import React, { Component } from 'react';
import './Groups.scss';
import fun from '../assets/images/me.jpeg';

import Panel from '../generalcomps/Panel/Panel';
import Column from '../generalcomps/Column/Column';
import Button from '../generalcomps/Button/Button';


export default class Groups extends Component {
  constructor() { 
    super();
    this.state = {
      groupName: "Bestest Friends in the World!",
      groupFounder: "Tyler Miller",
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
                  <span className="headerText group-text">
                    GROUPS YOU ARE A PART OF
                  </span>
              </Panel>

              <Panel
                justifyContent="center"
                width="100%">
                <Panel
                  justifyContent="space-between"
                  width="100%"
                  contentMargin="10px">
                  <Column
                    flexBasis="calc(33% - 20px)">
                    askdnakjnd
                  </Column>
                  <Column
                    flexBasis="calc(33% - 20px)">
                    askdnakjnd
                  </Column>
                  <Column
                    flexBasis="calc(33% - 20px)">
                    askdnakjnd
                  </Column>
                  <Column
                    flexBasis="calc(33% - 20px)">
                    askdnakjnd
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
