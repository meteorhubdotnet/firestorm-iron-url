Package.describe({
  name: 'meteorhubdotnet:firestorm-iron-url',
  summary: 'Fork of iron:url for Firestorm',
  version: '1.0.5',
  git: 'https://github.com/meteorhubdotnet/firestorm-iron-url'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@2.3.6');

  api.use('underscore');

  api.use('meteorhubdotnet:firestorm-iron-core@1.0.5');
  api.imply('meteorhubdotnet:firestorm-iron-core@1.0.5');

  api.addFiles('lib/compiler.js');
  api.addFiles('lib/url.js');
});

Package.onTest(function (api) {
  api.use('meteorhubdotnet:firestorm-iron-url');
  api.use('tinytest');
  api.use('test-helpers');
  api.addFiles('test/url_test.js', ['client', 'server']);
});
