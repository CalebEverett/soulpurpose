import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink, Link } from 'react-router';
import DocumentMeta from 'react-document-meta';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
import { pushState } from 'redux-router';
import connectData from 'helpers/connectData';
import config from '../../config';
import FaHome from 'react-icons/lib/fa/home';
import FaNewspaperO from 'react-icons/lib/fa/newspaper-o';
import FaWrench from 'react-icons/lib/fa/wrench';
import FaUser from 'react-icons/lib/fa/user';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
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
  state => ({user: state.auth.user, store: state.store}),
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
    history: PropTypes.object
  }

  static childContextTypes = {
    history: PropTypes.object
  }

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

  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  }

  render() {
    const styles = require('./App.scss');
    const navOpen = this.state.navOpen;

    const handleNavClick = () => {
      this.setState({navOpen: !this.state.navOpen});
    };

    const burgerIcon = (
      <div className={styles['burger' + (navOpen ? 'Open' : '')]} onClick={handleNavClick}>
        <span className={styles[navOpen ? 'barTopOpen' : 'barTop']} />
        <span className={styles[navOpen ? 'barMiddleOpen' : 'barMiddle']} />
        <span className={styles[navOpen ? 'barBottomOpen' : 'barBottom']} />
      </div>
    );
    return (
      <div className={styles.app}>
        <DocumentMeta {...config.app}/>
        <header className={styles.navBar}>
          {burgerIcon}
          <nav className={styles['nav' + (navOpen ? 'Open' : '')]} >
            <ul className={styles.navList}>
              <li className={styles.navItem} ><IndexLink to="/" activeClassName={styles.active} onClick={handleNavClick}><FaHome />Home</IndexLink></li>
              <li className={styles.navItem} ><Link to="" activeClassName={styles.active} onClick={handleNavClick}><FaNewspaperO />Blog</Link></li>
              <li className={styles.navItem} ><Link to="" activeClassName={styles.active} onClick={handleNavClick}><FaWrench />Tools</Link></li>
              <li className={styles.navItem}><Link to="/about" activeClassName={styles.active} onClick={handleNavClick}><FaUser />About</Link></li>
            </ul>
          </nav>
        </header>
        <div className={styles['pageWrap' + (navOpen ? 'Open' : '')]} onClick={navOpen ? handleNavClick : ''}>
          <div>
            {this.props.children}
          </div>
         <div className={styles.footer}>
           <h3>Join Me On</h3>
          <div className={styles.footerContainer}>
            <a href="https://www.facebook.com/niko.everett" className="left"><FaFacebookSquare /></a>
            <a href="https://twitter.com/nikoeverett1" className="center"><FaTwitterSquare /></a>
            <a href="https://www.linkedin.com/in/nikoeverett" className="right"><FaLinkedinSquare /></a>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
