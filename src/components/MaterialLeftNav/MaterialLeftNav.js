/** In this file, we create a React component which incorporates components provided by material-ui */

import React, { Component, PropTypes } from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import AppBar from 'material-ui/lib/app-bar';

export default class MaterialLeftNav extends Component {
  static propTypes = {
    menuitem: PropTypes.shape({
      primaryText: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }),
    menuitems: PropTypes.array,
    browser: PropTypes.object,
    path: PropTypes.string
  }

  static contextTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object
  }

  _handleMenuItemTouchTap(i) {
    const {history, store} = this.context;
    history.pushState(null, this.props.menuitems[i].value);
    this.refs.leftNavChildren.toggle();
    console.log(this.context);
    console.log(store);
  }

  _toggleLeftNav() {
    this.refs.leftNavChildren.toggle();
  }

  render() {
    const styles = require('./MaterialLeftNav.scss');
    const path = (!this.props.path) ? 'Home' : this.props.path;

    return (
      <div className={styles}>
        <AppBar
          title={path}
          onLeftIconButtonTouchTap={::this._toggleLeftNav}
        />
        <LeftNav ref="leftNavChildren" docked={this.props.browser.greaterThan.medium} >
          {this.props.menuitems.map( (menuitem, i) => {
            return ( <MenuItem key={i} index={i} primaryText={menuitem.primaryText} value={menuitem.value} onTouchTap={::this._handleMenuItemTouchTap.bind(this, i)}/>
              );
          }, this) };
        </LeftNav>
      </div>
    );
  }
}
