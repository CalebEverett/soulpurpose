/** In this file, we create a React component which incorporates components provided by material-ui */

const React = require('react');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
const Colors = require('material-ui/lib/styles/colors');
const LeftNav = require('material-ui/lib/left-nav');
const MenuItem = require('material-ui/lib/menu/menu-item');
const RaisedButton = require('material-ui/lib/raised-button');

const menuItems = [
  { route: 'get-started', text: 'Get Started' },
  { route: 'customization', text: 'Customization' },
  { route: 'components', text: 'Components' },
  { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
  {
    type: MenuItem.Types.LINK,
    payload: 'https://github.com/callemall/material-ui',
    text: 'GitHub'
  },
  {
    text: 'Disabled',
    disabled: true
  },
  {
    type: MenuItem.Types.LINK,
    payload: 'https://www.google.com',
    text: 'Disabled Link',
    disabled: true
  },
];

const MaterialLeftNav = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getInitialState() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
    };
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  componentWillMount() {
    const newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
      accent1Color: Colors.deepOrange500,
    });

    this.setState({muiTheme: newMuiTheme});
  },

  _handleTouchTap() {
    this.refs.leftNav.toggle();
  },

  render() {

    const containerStyle = {
      textAlign: 'center',
      paddingTop: '200px',
    };

    return (
      <div style={containerStyle}>
        <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
        <RaisedButton label="Toggle Menu" primary onTouchTap={this._handleTouchTap} />

      </div>
    );
  },

});

module.exports = MaterialLeftNav;
