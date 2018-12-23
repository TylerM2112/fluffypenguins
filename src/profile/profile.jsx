import React, { Component } from 'react';
import Panel from '../generalcomps/Panel/Panel';
import Column from '../generalcomps/Panel/Column';
export default class Profile extends Component {
  render() {
    return (
      <Panel
        gutters
        justifyContent='center'>
        <Column flex >Column 1</Column>
        <Column> Column 2</Column>
        <Column>Column 3</Column>
        </Panel>
    );
  }
}