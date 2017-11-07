Package.describe({
  name: 'tunguska:reactive-aggregate',
  version: '1.0.2',
  summary: 'Reactively publish aggregations.',
  git: 'https://github.com/robfallows/tunguska-reactive-aggregate',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.5');
  api.use('mongo');
  api.use('ecmascript');
  api.use('underscore');
  api.mainModule('aggregate.js', 'server');
});
