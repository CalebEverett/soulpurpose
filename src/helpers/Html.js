import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';
import DocumentMeta from 'react-document-meta';

/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
export default class Html extends Component {
  static propTypes = {
    assets: PropTypes.object,
    component: PropTypes.node,
    store: PropTypes.object
  }

  render() {
    const {assets, component, store} = this.props;
    const content = component ? ReactDOM.renderToString(component) : '';

    return (
      <html lang="en-us">
        <head>
          {DocumentMeta.renderAsReact()}

          <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png"/>
          <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32"/>
          <link rel="icon" type="image/png" href="/android-chrome-192x192.png" sizes="192x192"/>
          <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96"/>
          <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16"/>
          <link rel="manifest" href="/manifest.json"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="msapplication-TileImage" content="/mstile-144x144.png"/>
          <meta name="theme-color" content="#ffffff"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* styles (will be present only in production with webpack extract text plugin) */}
          {Object.keys(assets.styles).map((style, key) =>
            <link href={assets.styles[style]} key={key} media="screen, projection"
                  rel="stylesheet" type="text/css" charSet="UTF-8"/>
          )}

          {/* (will be present only in development mode) */}
          {/* outputs a <style/> tag with all bootstrap styles + App.scss + it could be CurrentPage.scss. */}
          {/* can smoothen the initial style flash (flicker) on page load in development mode. */}
          {/* ideally one could also include here the style for the current page (Home.scss, About.scss, etc) */}
          { Object.keys(assets.styles).length === 0 ? <style dangerouslySetInnerHTML={{__html: require('../containers/App/App.scss')._style}}/> : null }
        </head>
        <body>
          <div id="content" dangerouslySetInnerHTML={{__html: content}}/>
          <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(store.getState())};`}} charSet="UTF-8"/>
          <script src={assets.javascript.main} charSet="UTF-8"/>
        </body>
      </html>
    );
  }
}
