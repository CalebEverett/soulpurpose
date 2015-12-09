import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';
import config from '../../config';

export default class About extends Component {

  render() {
    const styles = require('./About.scss');
    const content = require('./about.md');

    return (
      <div className={styles.about}>
        <div className={styles.headerbar} />
        <img className={styles.nikophoto} src={require('./nikophoto.jpg')} />
        <h1>About Niko</h1>
        <DocumentMeta title={config.app.title + ': About Us'}/>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    );
  }
}
