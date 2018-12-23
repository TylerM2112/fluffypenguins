import React, { Component } from 'react';
import './Column.scss';

export default class Column extends Component {

  constructor(props) {
    super(props);

    this.state = {
      style: {
        flex: this.props.flex ? 1 : 0,
        marginRight: this.props.marginRight
      }
    }
  }

  render() {
    return (
      <div
        style={ this.state.style }
        className="column-container">
        { this.props.children }
    </div>
    );
  }
}