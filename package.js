Package.describe({
  name: 'meteorhubdotnet:firestorm-iron-url',
  summary: 'Fork of iron:url for Firestorm',
  version: '1.0.4',
  git: 'https://github.com/meteorhubdotnet/firestorm-iron-url'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@2.2');

  api.use('underscore');

  api.use('meteorhubdotnet:firestorm-iron-core@1.0.4');
  api.imply('meteorhubdotnet:firestorm-iron-core@1.0.4');

  api.add_files('lib/compiler.js');
  api.add_files('lib/url.js');
});

Package.on_test(function (api) {
  api.use('meteorhubdotnet:firestorm-iron-url');
  api.use('tinytest');
  api.use('test-helpers');
  api.add_files('test/url_test.js', ['client', 'server']);
});
