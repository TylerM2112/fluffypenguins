import React, { Component } from 'react';
import './Column.scss';

export default class Column extends Component {

  constructor(props) {
    super(props);

    this.state = {
      style: {
        flex            : this.props.flex ? 1 : '0',
        marginRight     : this.props.marginRight || '0px',
        marginBottom    : this.props.marginBottom || '0px',
        marginTop       : this.props.marginBottom  || '0px',
        justifyContent  : this.props.justifyContent || 'flex-start',
        flexDirection   : this.props.flexDirection || 'row',
        flexBasis       : this.props.width || '0px',
        alignItems      : this.props.contentY || 'flex-start',
        padding         : this.props.padding || '0px'
      },
      className: this.props.className ? `${this.props.className} column-container` : 'column-container' 
    }
  }

  render() {
    return (
      <div
        style={ this.state.style }
        className={ this.state.className }>
        { this.props.children }
    </div>
    );
  }
}