{ /* const {user} = this.props; */ }

        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <NavbarLink to="/" className="navbar-brand" component={IndexLink}>
              <div className={styles.brand}/>
              React Redux Example
            </NavbarLink>

            <ul className="nav navbar-nav">
              {user && <li><NavbarLink to="/chat">Chat</NavbarLink></li>}

              <li><NavbarLink to="/home">Home</NavbarLink></li>
              <li><NavbarLink to="/widgets">Widgets</NavbarLink></li>
              <li><NavbarLink to="/survey">Survey</NavbarLink></li>
              <li><NavbarLink to="/about">About Us</NavbarLink></li>
              {!user && <li><NavbarLink to="/login">Login</NavbarLink></li>}
              {user && <li className="logout-link"><a href="/logout" onClick={::this.handleLogout}>Logout</a></li>}
            </ul>
            {user &&
            <p className={styles.loggedInMessage + ' navbar-text'}>Logged in as <strong>{user.name}</strong>.</p>}
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="https://github.com/erikras/react-redux-universal-hot-example"
                   target="_blank" title="View on Github"><i className="fa fa-github"/></a>
              </li>
            </ul>
          </div>
        </nav>

        <MenuItem primaryText="Survey" onTouchTap={<Link to="/survey"/>} />

                  <MenuItem primaryText="Widgets" onTouchTap={() => history.pushState(null, '/widgets')}>Hello</MenuItem>
          <MenuItem primaryText="Survey" onTouchTap={() => history.pushState(null, '/survey')}>Goodbye</MenuItem>
          <MenuItem><Link to="/">Home</Link></MenuItem>
        </LeftNav>