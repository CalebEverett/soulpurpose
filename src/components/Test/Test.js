/** In this file, we create a React component which incorporates components provided by material-ui */

const React = require('react');
const RaisedButton = require('material-ui/lib/raised-button');
const Dialog = require('material-ui/lib/dialog');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
const Colors = require('material-ui/lib/styles/colors');

const Test = React.createClass({

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
    this.refs.superSecretPasswordDialog.show();
  },

  render() {

    const containerStyle = {
      textAlign: 'center',
      paddingTop: '200px',
    };

    const standardActions = [
      { text: 'Okay' },
    ];

    return (
      <div style={containerStyle}>
        <Dialog
          title="Super Secret Password"
          actions={standardActions}
          ref="superSecretPasswordDialog">
          1-2-3-4-5
        </Dialog>

        <h1>material-ui</h1>
        <h2>example project</h2>

        <RaisedButton label="Super Secret Password" primary onTouchTap={this._handleTouchTap} />

      </div>
    );
  },

});

module.exports = Test;
