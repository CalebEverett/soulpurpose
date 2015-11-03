/** In this file, we create a React component which incorporates components provided by material-ui */

const React = require('react');
const RaisedButton = require('material-ui/lib/raised-button');
const Dialog = require('material-ui/lib/dialog');

const Test = React.createClass({

  _handleTouchTap1() {
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

        <RaisedButton label="Super Secret Password" primary onTouchTap={this._handleTouchTap1} />

      </div>
    );
  },

});

module.exports = Test;
