## Changelog
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
