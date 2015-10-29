const React = require('react');
const RaisedButton = require('material-ui/lib/raised-button');

const MaterialButton = React.createClass({
  render() {
    return (
        <RaisedButton label="Default" />
    );
  },
});

module.exports = MaterialButton;
