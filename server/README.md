# Injular - Server example

Based on [Browsersync server recipe](https://github.com/BrowserSync/recipes/tree/master/recipes/server)

## Installation/Usage:

To try this example, follow these 4 simple steps. 

**Step 1**: Clone this entire repo
```bash
$ git clone https://github.com/tfoxy/bs-injular-recipes.git
```

**Step 2**: Move into the directory containing this example
```bash
$ cd bs-injular-recipes/server
```

**Step 3**: Install dependencies
```bash
$ npm install
```

**Step 4**: Run the example
```bash
$ npm start
```

### Additional Info:

To see the HTML injecting, simply perform changes to `templates/main.html`

### Preview of `app.js`:
```js
var browserSync = require('browser-sync');
var bsInjular = require('bs-injular');

browserSync.use(bsInjular, {
  templates: '/templates/*.html'
});

browserSync({
    server: ['app', 'node_modules'],
    files: ['app/**/*']
});
```

