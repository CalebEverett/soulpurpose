/** In this file, we create a React component which incorporates components provided by material-ui */

import React, { Component } = from 'react';
import mui from 'material-ui';
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;
let RaisedButton = mui.RaisedButton;

export default class Main extends Component {

static propTypes = {
        children: PropTypes.element.isRequired,
        error: PropTypes.object,
        muiTheme: PropTypes.object
    };
    static childContextTypes = {
        muiTheme: React.PropTypes.object
    };

    getChildContext(){
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    }

    render(){
        return !this.props.error ? (
            <div>
                <Header />
                <RaisedButton label="Hello"/>
                {this.props.children}
                <Feedback />
                <Footer />
            </div>
        ) : this.props.children;
    }
}