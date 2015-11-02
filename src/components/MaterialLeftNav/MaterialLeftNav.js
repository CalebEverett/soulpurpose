/** In this file, we create a React component which incorporates components provided by material-ui */

import React, { Component, PropTypes } from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';

export default class MaterialLeftNav extends Component {
  static propTypes = {
    menuitem: PropTypes.shape({
      primaryText: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }),
    menuitems: PropTypes.array,
    browser: PropTypes.object
  }

  static contextTypes = {
    history: PropTypes.object.isRequired
  }

  _handleMenuItemTouchTap(i) {
    const {history} = this.context;
    history.pushState(null, this.props.menuitems[i].value);
    this.refs.leftNavChildren.toggle();
  }

  _handleToggleButtonTouchTap() {
    this.refs.leftNavChildren.toggle();
  }

  render() {
    const styles = require('./MaterialLeftNav.scss');
    const menuDocked = this.props.browser.greaterThan.medium ? true : false;

    return (
      <div>
        <LeftNav ref="leftNavChildren" docked={menuDocked}>
          {this.props.menuitems.map( (menuitem, i) => {
            return ( <MenuItem index={i} primaryText={menuitem.primaryText} value={menuitem.value} onTouchTap={::this._handleMenuItemTouchTap.bind(this, i)}/>
              );
          }, this) }
        </LeftNav>
        <div className={styles.menuToggle}>
          <RaisedButton label="Toggle Menu" primary onTouchTap={::this._handleToggleButtonTouchTap} />
        </div>
      </div>
    );
  }
}
