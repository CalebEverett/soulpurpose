require('babel/polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Niko Everett',
    description: 'On a Mission to Inspire!',
    meta: {
      charSet: 'utf-8',
      property: {
        'og:site_name': 'Niko Evertt',
        'og:image': 'https://nikoeverett.com/logo.jpg',
        'og:locale': 'en_US',
        'og:title': 'Niko Everett',
        'og:description': 'On a Mission to Inspire!',
        'twitter:card': 'summary',
        'twitter:site': '@nikoeverett',
        'twitter:creator': '@nikoeverett',
        'twitter:title': 'Niko Everett',
        'twitter:description': 'An online resource for inspiration and motivation',
        'twitter:image': 'https://nikoeverett.com/logo.jpg',
        'twitter:image:width': '200',
        'twitter:image:height': '200'
      }
    }
  }
}, environment);
