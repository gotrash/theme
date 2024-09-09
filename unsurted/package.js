// package metadata file for Meteor.js

/* eslint-env meteor */

Package.describe({
  name: 'gotrash:theme', // https://atmospherejs.com/twbs/bootstrap
  summary: 'The most popular front-end framework for developing responsive, mobile first projects on the web.',
  version: '5.3.3',
  git: 'https://github.com/gotrash/theme.git'
})

Package.onUse(api => {
  api.versionsFrom('METEOR@1.0')
  api.addFiles([
    'dist/css/bootstrap.css',
    'dist/js/bootstrap.js'
  ], 'client')
})
