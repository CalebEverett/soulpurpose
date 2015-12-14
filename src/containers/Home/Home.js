import React, { Component } from 'react';
import SubscribeForm from '../../components/SubscribeForm/SubscribeForm.js';
import https from 'https';

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

    const handleSubmit = () => {
      const subscriber = JSON.stringify({
        'email': 'caleb@careercalifornia.edu',
        'last_name': 'Everett',
        'first_name': 'Caleb'
      });

      const options = {
        host: 'api.sendgrid.com',
        path: '/v3/contactdb/recipients',
        port: 80,
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json',
          'Content-Length': subscriber.length
        }
      };

      console.log(options);

      const hreq = https.request(options, function submitme(hres) {
        console.log('STATUS CODE: ' + hres.statusCode);
        console.log('HEADERS: ' + JSON.stringify(hres.headers));
        hres.setEncoding('utf8');

        hres.on('data', function datame(chunk) {
          console.log('\n\n===========CHUNK===============');
          console.log(chunk);
        });

        hres.on('end', function endme() {
          console.log('\n\n=========RESPONSE END===============');
        });

        hres.on('error', function errorme(error) {
          console.log('ERROR: ' + error.message);
        });
      });

      hreq.write(subscriber);
      hreq.end();
    };

    return (
      <div className={styles.home}>
        <div className={styles.mastheadContainer}>
          <div className={styles.posterImage} />
          <video className={styles.mastheadVideo} src={require('./nikovideo.mp4')} type="video/mp4" preload="true" onCanPlay={handleOnCanPlay} loop="loop" />
          <div className={styles[overlayStyle]} />
          <div className={styles.mastheadText}>
            <h1>SOUL PURPOSEFULNESS</h1>
            <h3>Let’s see our greatness, taste our desire and feel our passion!</h3>
          </div>
        </div>
        <SubscribeForm onSubmit={handleSubmit}/>
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
