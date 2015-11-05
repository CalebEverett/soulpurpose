/** In this file, we create a React component which incorporates components provided by material-ui */

import React, { Component, PropTypes } from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import AppBar from 'material-ui/lib/app-bar';

export default class MaterialLeftNav extends Component {
  static propTypes = {
    browser: PropTypes.object,
    path: PropTypes.string
  }

  static contextTypes = {
    history: PropTypes.object.isRequired,
    spTheme: PropTypes.object
  }

  _handleLeftNavChange(event, selectedIndex, menuItem) {
    const {history} = this.context;
    history.pushState(null, menuItem.route);
    this.refs.leftNav.toggle();
  }

  _toggleLeftNav() {
    this.refs.leftNav.toggle();
  }

  render() {
    const styles = require('./MaterialLeftNav.scss');
    const path = (!this.props.path) ? 'Home' : this.props.path;
    const {palette} = this.context.spTheme;
    const divColor = palette.primary3Color;
    const leftNavHeader = (
      <div style={{backgroundColor: divColor, height: '12em'}}>Niko</div>
    );

    const menuItems = [
      {key: 0, text: 'Survey', route: '/survey'},
      {key: 1, text: 'Widgets', route: '/widgets'},
      {key: 2, text: 'Home', route: '/'}
    ];

    return (
      <div className={styles}>
        <AppBar
          title={path}
          onLeftIconButtonTouchTap={::this._toggleLeftNav}
        />
        <LeftNav
          ref="leftNav"
          menuItems={menuItems}
          onChange={::this._handleLeftNavChange}
          docked={this.props.browser.greaterThan.medium}
          header={leftNavHeader}
        />
      </div>
    );
  }
}
