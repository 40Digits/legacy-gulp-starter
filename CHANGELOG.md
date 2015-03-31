## Changelog
**03/31/2015**
* Updated MQ Sync along with necessary modules and removed unecessary ones.
* Updated JS Breakpoints Sass module to setup the media query order for MQ Sync.
* Added a shim file to easily use plugins that don't use CommonJS and updated package.json to use it.
* Moving `$.refresh`, `{}.keys`, and `[].forEach` polyfills from main.js to their own modules.
* Adding some test stuff to index.php

**03/15/2015**
* Added in Wysiwyg style export to Wordpress editor.
* Grouped sass files for better usability.

**03/11/2015**
* Added in Sass globbing support.

**02/28/2015**
* Added in EJS template support.
* Added in more detailed error messages for Sass.

**02/20/2015**
* Added in Media Query Sync modules.
* Updated packages
* Reworked LiveReload -- no longer does it continue to run after a single task
* Added in samples for symbols & sprites

**01/27/2015**
* We are using libsass for faster processing.
* Sass Globbing is no more, all new sass files need to be add in manually through an `@import`. See `_all.scss` in folders where sass globbing was a thing. This is due to having moved to libsass.
* Updated [font mixins and usage](https://github.com/40Digits/gulp-starter/wiki/Sass#fonts)
* Updated [media query mixin and usage](https://github.com/40Digits/gulp-starter/wiki/Sass#media-queries)
* Updated [color usage and best practices](https://github.com/40Digits/gulp-starter/wiki/Sass#colors)
