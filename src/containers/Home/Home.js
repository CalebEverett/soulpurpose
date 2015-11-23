import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    return (
      <div className={styles.home}>
        <div className={styles.masthead}>
          <div className="container">
            <h2>Built for Speed but Comfy on the Inside!</h2>
          </div>
        </div>
        <section className={styles.inspirationSection}>
          <h3>Let’s see our greatness, taste our desire and feel our passion. Let’s believe in something big and reach beyond our grasp. Let’s fall and let’s get back up. Let’s SHINE! Let’s feel good and happy and alive. Let’s set this world on FIRE!</h3>
        </section>
        <section className={styles.featureSection}>
          <div className={styles.feature}>
            <p>Blog</p>
          </div>
          <div className={styles.feature}>
            <p>Tools</p>
          </div>
        </section>
      </div>
    );
  }
}
