Package.describe({
  name: 'meteorhubdotnet:firestorm-iron-url',
  summary: 'Fork of iron:url for Firestorm',
  version: '1.0.15',
  git: 'https://github.com/meteorhubdotnet/firestorm-iron-url'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@2.11.0');

  api.use('underscore');

  api.use('meteorhubdotnet:firestorm-iron-core@1.0.15');
  api.imply('meteorhubdotnet:firestorm-iron-core@1.0.15');

  api.addFiles('lib/compiler.js');
  api.addFiles('lib/url.js');
});
