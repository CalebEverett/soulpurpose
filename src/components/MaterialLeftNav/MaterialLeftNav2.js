/** In this file, we create a React component which incorporates components provided by material-ui */

import React, { Component } from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import RaisedButton from 'material-ui/lib/raised-button';

const menuItems = [
  { route: '/widgets', text: 'Widgets' },
  { route: 'survey', text: 'Survey' },
  { route: 'about', text: 'About' }
];

export default class MaterialLeftNav extends Component {
  static propTypes = {
    history: React.PropTypes.object
  }

  static contextTypes = {
    location: React.PropTypes.object,
    history: React.PropTypes.object
  }

  contructor(props) {
    super(props);
  }

  _onLeftNavChange(e, key, payload) {
    this.props.history.pushState(null, payload.route);
  }

  _handleTouchTap() {
    this.refs.leftNav.toggle();
  }

  render() {
    return (
      <div>
        <LeftNav
          ref="leftNav"
          docked
          menuItems={menuItems}
          onChange={this._onLeftNavChange}
        />
        <RaisedButton label="Toggle Menu" primary onTouchTap={this._handleTouchTap} />
      </div>
    );
  }

}
