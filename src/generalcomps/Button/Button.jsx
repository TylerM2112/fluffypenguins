import React, { Component } from 'react';
import './Button.scss';
export default class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: this.props.disabled || false,
      onClick: this.props.onClick || '',
      label: this.props.label || 'SEND ME A LABEL',
      type: this.props.type || 'cta',

    }
  }
  render() {
    return (
      <button
        className={this.state.type === 'cta' ? 'Button headerText cta' : 'Button headerText ghost'}
        disabled={ this.state.disabled }
        onClick={ this.state.onClick }> 
        { this.state.label }
      </button>
    );
  }
}