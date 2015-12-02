import React, { Component } from 'react';
import FaNewspaperO from 'react-icons/lib/fa/newspaper-o';
import FaWrench from 'react-icons/lib/fa/wrench';

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
          <h3>Let’s see our greatness, taste our desire and feel our passion. Let’s believe in something big and reach beyond our grasp. Let’s fall and get back up. Let’s SHINE! Let’s feel good and happy and alive. Let’s set this world on FIRE!</h3>
        </section>
        <section className={styles.featureSection}>
          <div className={styles.feature}>
            <div className={styles.cardImage}><FaNewspaperO className={styles.cardImageBackground} /></div>
            <div className={styles.cardDesc}>
              <h2>Blog</h2>
              <p>Check out my latest posts on feeling great and living life to the fullest.</p>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.cardImage}><FaWrench className={styles.cardImageBackground} /></div>
            <div className={styles.cardDesc}>
              <h2>Tools</h2>
              <p>Use these tools to get inspired and feel amazing.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
