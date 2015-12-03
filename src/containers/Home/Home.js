import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');

    const handleOnCanPlay = (event) => {
      setTimeout(function playVid() {
        event.target.play();
      }, 3000);
    };

    return (
      <div>
        <div className={styles.mastheadContainer}>
          <video className={styles.mastheadVideo} src={require('./nikovideo.mp4')} type="video/mp4" preload="true" onCanPlay={handleOnCanPlay} loop="loop" />
          <div className={styles.overlay} />
          <div className={styles.mastheadText}>
            <h1>SOUL PURPOSE</h1>
            <h3>Let’s see our greatness, taste our desire and feel our passion!</h3>
          </div>
        </div>
        <section className={styles.inspirationSection}>
          <h2>Let’s believe in something big and reach beyond our grasp. Let’s fall and get back up. Let’s SHINE! Let’s feel good and happy and alive. Let’s set this world on FIRE!</h2>
        </section>
        <section className={styles.featureSection}>
          <div className={styles.featureBlog}>
            <div className={styles.cardDesc}>
              <h2>Blog</h2>
              <p>Check out my latest posts on feeling great and living life to the fullest.</p>
            </div>
          </div>
          <div className={styles.featureTools}>
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
