import React, { Component } from 'react';
import './Panel.scss';
export default class Panel extends Component {

  constructor(props) {
    super(props);
    //! Passable props
      //* justifyContent === justify-content for flexbox
      //* gutters ==== padding for the panel itself
        //! Passing just 'gutters' makes padding === this.state.defaultStyles.gutters
        //! Passing 'gutters="100px"' will make the padding equal whatever is passed
      //* alignItems === alignment of the Columns
      //* width === width of the Panel
      //* contentMargin === the margin-right for all of the columns
      //* flexAll === makes all of the Columns flex = 1
      //* noWrap === makes the panel not wrap
    //!

    this.state = {
      style: {
        justifyContent  : this.props.justifyContent || 'flex-start',
        padding         : typeof this.props.gutters === undefined ? '' : this.props.gutters === true ? '20px' : this.props.gutters,
        alignItems      : this.props.alignContent || '',
        flexWrap        : this.props.noWrap || 'wrap',
        width           : this.props.width || 'initial',
        height          : this.props.height || 'initial'
      },

      //* This is the margin-right for all of the columns
      contentMargin : this.props.contentMargin || 0,
      children      : []
    }
  }

  componentDidMount() {
    
    //* If there is flexAll or contentMargin, clone the Column components and add props to them
    //* else just set this.state.children to this.props.children
    if (this.props.flexAll || this.state.contentMargin) {

      //* If there is flexAll send props.flex = 1 to all the Column components
      //! This is overridden if a Column already has a flex property
      let getFlex = this.props.flexAll ? '1 1 0' : 0;
      this.getMarginBottom();

      //* Loop through all of the child components and get all the Column components and add props to them
      let newChildren = this.props.children.map(
        (e) => {

          //* if the component type is Column, clone and add the flex and marginRight props to them
          //* else just return the child 
          if (e.type.name === 'Column') {
            return React.cloneElement(e, { flex: e.props.flex ? e.props.flex : getFlex, marginRight: this.state.contentMargin, marginBottom: this.state.contentMargin });
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

  getMarginBottom() {

    if(this.state.flexAll && this.state.contentMargin && !this.state.noWrap) {
      let padding = this.state.style.padding.split(' ');
      let cmNum = this.state.contentMargin.replace(/[A-Za-z]/g,'');
      let newPadding = '';
      
      if (padding.length === 1) {
        let num = +padding[0].replace(/[A-Za-z]/g,'');
        let type = padding[0].replace(/\d/g, '');
        
        newPadding = `${padding[0]} ${padding[0]} ${(num - cmNum) + type} ${padding[0]}`;
      }

      if(padding.length === 2) {
        let num = +padding[0].replace(/[A-Za-z]/g,'');
        let type = padding[0].replace(/\d/g, '');
      
        newPadding = `${padding[0]} ${padding[1]} ${(num-cmNum) + type} ${padding[1]}`
      }

      
    if(padding.length === 4) {
      let num = +padding[2].replace(/[A-Za-z]/g,'');
      let type = padding[2].replace(/\d/g, '');

      newPadding = `${padding[0]} ${padding[1]} ${(num-cmNum) + type} ${padding[3]}`;
    }

    let style = this.state.style;
    style.padding = newPadding;
    this.setState({ style: style });

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