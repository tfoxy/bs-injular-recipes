var browserSync = require('browser-sync');
var bsInjular = require('bs-injular');

browserSync.use(bsInjular, {
  templates: '/templates/*.html'
});

browserSync({
    server: ['app', 'node_modules'],
    files: ['app/**/*']
});