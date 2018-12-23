import React, { Component } from 'react';
import './Panel.scss';
export default class Panel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      style: {
        justifyContent: this.props.justifyContent || 'flex-start',
        padding: typeof this.props.gutters === undefined ? '' : this.props.gutters === true ? '20px' : this.props.gutters,
        alignItems: this.props.alignContent || '',
        flexWrap: this.props.noWrap || 'wrap',
      },
      
      children: []
    }
  }

  componentDidMount() {
    
    if (this.props.flexAll) {
      let newChildren = this.props.children.map(
        (e) => {
          if (e.type.name === 'Column') {
            return React.cloneElement(e, { flex: 1 });
          }
          else {
            return e;
          }
        }
      )
      this.setState({ children: newChildren });
    }
    else {
      this.setState({ children: this.props.children })
    }

  }
  render() {
    return (
      <div style={ this.state.style } className="panel-container">
        { this.state.children }
      </div>
    );
  }
}