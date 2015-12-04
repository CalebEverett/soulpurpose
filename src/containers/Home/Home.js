import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {overlayStyle: 'overlay'};
  }

  render() {
    const styles = require('./Home.scss');
    const overlayStyle = this.state.overlayStyle;

    const handleOnCanPlay = (event) => {
      this.setState({overlayStyle: 'overlayVideo'});
      console.log(this.state.overlayState);
      setTimeout(function playVid() {
        event.target.play();
      }, 3000);
    };

    return (
      <div className={styles.home}>
        <div className={styles.mastheadContainer}>
          <div className={styles.posterImage} />
          <video className={styles.mastheadVideo} src={require('./nikovideo.mp4')} type="video/mp4" preload="true" onCanPlay={handleOnCanPlay} loop="loop" />
          <div className={styles[overlayStyle]} />
          <div className={styles.mastheadText}>
            <h1>SOUL PURPOSE</h1>
            <h3>Let’s see our greatness, taste our desire and feel our passion!</h3>
          </div>
        </div>
        <section className={styles.inspirationSection}>
          <h2>Let’s believe in something big and reach beyond our grasp. Let’s fall and get back up. Let’s <strong>SHINE!</strong> Let’s feel good and happy and alive. Let’s set this world on <strong>FIRE!</strong></h2>
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
