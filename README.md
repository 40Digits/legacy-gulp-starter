# gulp starter aka Eta

Eta-2 Actis-class interceptor, sometimes referred to as the Jedi interceptor due to its popularity with Jedi pilots, was a Clone Wars-era Republic starfighter.

For 40Digits, Eta serves as our build script for internal projects. The build script took much inspiration from [graypants'](https://github.com/greypants/gulp-starter) & [Chris Davies'](https://github.com/chrisdavies/gulp_starter_kit) starter kits. It was modified to work within the needs and requirements of 40Digits development.

Think of Eta as a set of well crafted tasks that you can add to your Gulp workflow and help speed up your development.

Eta includes the following tools, tasks, and workflows:

- [Browserify](http://browserify.org/)
- [SASS](http://sass-lang.com/) (libsass with [source maps](https://github.com/sindresorhus/gulp-ruby-sass#sourcemap), [autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer), and [combine media-queries](https://www.npmjs.com/package/gulp-combine-mq))
- [Image optimization](https://www.npmjs.com/package/gulp-imagemin)
- [Sprite generation](https://www.npmjs.com/package/css-sprite)
- [Custom Icon Font generation](https://www.npmjs.com/package/gulp-iconfont)
- Error handling in the console [and in Notification Center](https://github.com/mikaelbr/gulp-notify)
- Compression task for production builds (CSS + JS)
- [BrowserSync](http://www.browsersync.io/)

## Requirements

- [Cairo](https://github.com/Automattic/node-canvas/wiki/installation---osx)
- [Canvas](https://github.com/Automattic/node-canvas/wiki/installation---osx)

***

## Install Eta
```bash
npm install --save-dev gulp-eta
```
This adds Eta to your `node_modules` directory along with all of its dependencies. See [troubleshooting](https://github.com/40Digits/eta#troubleshooting) section if you run into errors.

## Install Gulp
```bash
npm install --save-dev gulp
```
In order to use `gulp` in the root of your app, you need to have a copy of Gulp installed.

## gulpfile.js

Create `gulpfile.js` in the root of your app. Here is where you link up Eta. It returns an object of Gulp tasks which you can set on `gulp.tasks`. One great thing is that you aren't limited to what Eta provides! You can declare your own custom tasks, too.

```javascript
var gulp = require('gulp');
var eta = require('gulp-eta');

// instantiate eta with some options
gulp.tasks = eta({ // your options });

// add some custom tasks if you want
gulp.task('mytask', function() { // blah blah blah });
```

Check out the [options](NEED LINK) that you can set for the tasks.

## Run the tasks
```bash
gulp
```
This will run the `default` gulp task, which has the following task dependencies: `['browserSync', 'symbols', 'sass', 'sprites', 'images', 'browserify']`.
- `symbols` task generates your icon font, preview file, and sass file.
- `sass` task compiles your sass files.
- `images` moves image copies from a source folder, performs optimizations, then outputs them into the assets folder.
- `sprites` task compiles sprite assets into a sprite sheet, and generates a sass file for mixins & variable use.
- `browserify` compiles all of your CommonJS modules into bundles.
- `watch` task looks out for changes, and when a file is added, removed, or edited, it runs the necessary task. (Defaults: 'browserify', 'sass', 'symbols', 'images', 'sprites')
- `browserSync` Starts Browser Sync and watches for changes on compiled assets. The `watch` task runs in tandem to compile the source files which then triggers an update to Browser Sync.

## Scaffold

Eta uses the scaffold object to handle paths. Below is the default configuration. Override them to meet your needs. `source.root` and `assets.root` are relative to directory of your `gulpfile`.

If you want an `asset` to be in the root of your app (where your gulpfile lives) then set it to `'/'`.

*Note:* Make sure you set up your scaffold before you run `gulp init`.

**Examples:**

If you need your assets folder to live in a `/public` folder:

```javascript
options.scaffold.assets.root = 'public/assets';
```

If you want to rename your source folder:

```javascript
options.scaffold.source.root = 'source';
```

If you want your CSS files in the root of your app:

```javascript
options.scaffold.assets.styles = '/';
```

Defaults:
```
config.scaffold = {
  source: {
    root:     '_src',
    images:   'images',
    scripts:  'js',
    sprites:  'sprites',
    styles:   'sass',
    symbols:  'symbols',
    static:   'static'
  },
  assets: {
    root:     'assets',
    images:   'images',
    sprites:  'images/sprites',
    scripts:  'js',
    styles:   'css',
    symbols:  'fonts/symbols',
    static:   '/'
  }
}
```

## Tasks

### `init`

Creates a `_src` directory where you have specified for it to go. Make sure that you define your scaffold settings in `gulpfile.js` before you run this so that Eta will create it in the correct place. (Default path is `/_src`)

### `symbols`

Generates your icon font, preview file, and sass file.

### `sass`

Compiles your sass files.

### `images`

Moves image copies from a source folder, performs optimizations, then outputs them into the assets folder.

### `sprites`

Compiles sprite assets into a sprite sheet, and generates a sass file for mixins & variable use.

### `browserify`

Compiles all of your CommonJS modules into bundles.

### `minifyCss`

Minifies your compiled stylesheets

### `minifyJs`

Minifies your compiled JavaScript files

### `static`

Creates static HTML files from HTML partials

### `watch`

Watches for changes on source files, and when a file is added, removed, or edited, it runs the necessary task. (Defaults: `browserify`, `sass`, `symbols`, `images`, `sprites`)

### `browserSync`

Starts Browser Sync and runs `watch` in tandem.

Config options:

`options.browserSync.config` (See http://www.browsersync.io/docs/options/ for a complete list of configuration options)


### `production`

Re-builds optimized, compressed css and js files to the assets folder, as well as output their file sizes to the console. It's a shortcut for running the following tasks: `['minifyCss', 'uglifyJs']`.

***
## Configuration
Each task has a set of options that can be overridden to suit your needs. Check out the [default config file](NEED LINK) to see what your options are.

## Documentation
Visit our wiki for [detailed documentation on features and support](https://github.com/40Digits/gulp-starter/wiki).

## Troubleshooting
If you are running into canvas errors, please review the [installation guide](https://github.com/Automattic/node-canvas/wiki/installation---osx) for canvas. 

If you are receiving `Package xcb-shm was not found`, please run the following commands:
- If you are using Fish `set -xU PKG_CONFIG_PATH /usr/local/lib/pkgconfig:/opt/X11/lib/pkgconfig`
- If you are using s/iTerm/general sh `export PKG_CONFIG_PATH /usr/local/lib/pkgconfig:/opt/X11/lib/pkgconfig:$PKG_CONFIG_PATH` or `export PKG_CONFIG_PATH=/opt/X11/lib/pkgconfig`

For additional install help, [view the installation guide](https://github.com/Automattic/node-canvas/wiki/installation---osx).
