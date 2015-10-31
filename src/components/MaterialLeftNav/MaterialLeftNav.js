/** In this file, we create a React component which incorporates components provided by material-ui */

import React, { Component } from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menu/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';

export default class MaterialLeftNav extends Component {
  static propTypes = {
    children: React.PropTypes.object
  }

  _handleTouchTap() {
    this.refs.leftNav.toggle();
  }

  render() {
    return (
      <div>
        <LeftNav ref="leftNavChildren" docked >
          <MenuItem index={0}>Hello</MenuItem>
          <MenuItem index={1}>Hello</MenuItem>
          <MenuItem index={2}>Hello</MenuItem>
        </LeftNav>
        <RaisedButton label="Toggle Menu" primary onTouchTap={this._handleTouchTap} />
      </div>
    );
  }

}
