import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink, Link } from 'react-router';
import DocumentMeta from 'react-document-meta';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
import { InfoBar } from 'components';
import { pushState } from 'redux-router';
import connectData from 'helpers/connectData';
import config from '../../config';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

function fetchData(getState, dispatch) {
  const promises = [];
  if (!isInfoLoaded(getState())) {
    promises.push(dispatch(loadInfo()));
  }
  if (!isAuthLoaded(getState())) {
    promises.push(dispatch(loadAuth()));
  }
  return Promise.all(promises);
}

@connectData(fetchData)
@connect(
  state => ({user: state.auth.user}),
  {logout, pushState})
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired,
    navOpen: PropTypes.bool
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {navOpen: false};
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      // login
      this.props.pushState(null, '/loginSuccess');
    } else if (this.props.user && !nextProps.user) {
      // logout
      this.props.pushState(null, '/');
    }
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.logout();
  }

  render() {
    const {user} = this.props;
    const styles = require('./App.scss');
    const navOpen = this.state.navOpen;

    const handleNavClick = () => {
      this.setState({navOpen: !this.state.navOpen});
    };

    const burgerIcon = (
      <div className={styles.burger} onClick={handleNavClick}>
        <span className={styles[navOpen ? 'barTopOpen' : 'barTop']} />
        <span className={styles[navOpen ? 'barMiddleOpen' : 'barMiddle']} />
        <span className={styles[navOpen ? 'barBottomOpen' : 'barBottom']} />
      </div>
    );

    return (
      <div className={styles.app}>
        <DocumentMeta {...config.app}/>
        <nav className={styles['nav' + (navOpen ? 'Open' : '')]}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <IndexLink to="/" activeStyle={{color: '#33e0ff'}}>
                <div className={styles.brand}/>
              <span>React Redux Example</span>
              </IndexLink>
            </li>
            <li className={styles.navItem} onClick={handleNavClick}><Link to="/survey">Survey</Link></li>
            <li className={styles.navItem}><a href="#">Link 2</a></li>
            <li className={styles.navItem}><a href="#">Link 3</a></li>
            <li className={styles.navItem}><a href="#">Link 4</a></li>
          </ul>
        </nav>
        <div className={styles['pageWrap' + (navOpen ? 'Open' : '')]}>
          <header className={styles.navBar}>
            {burgerIcon}
          </header>
          <div>
            {this.props.children}
          </div>
          <InfoBar/>

          <div className="well text-center">
            Have questions? Ask for help <a
            href="https://github.com/erikras/react-redux-universal-hot-example/issues"
            target="_blank">on Github</a> or in the <a
            href="https://discordapp.com/channels/102860784329052160/105739309289623552" target="_blank">#react-redux-universal</a> Discord channel.
          </div>
        </div>
      </div>
    );
  }
}
