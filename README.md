# Rosa

The theme for the DSA-LSC website. It's based on Casper.

# Development Setup

This modification uses Gulp, JS, and SCSS to control the site. Most of the styles have been done in SCSS, styles transferred from casper have not been cleaned up yet, that's on the to-do list.

#### To install:   

`$ npm install`

#### Available Gulp Tasks:

- `$ gulp` - Runs `gulp watch` based on a local install.    
- `$ gulp lint` - Runs lint on the JS to ensure there's no errors.
- `$ gulp build` - Run for **PROD**, this creates minified files and preps site for production environment. 

#### New Directory Structure:
- All styles documents are now in assets/scss
- All Scripts are located in assets/js, vendor scripts in assets/js/vendors
- Images for site are in assets/images
 
----
### Ghost Specific Docs
----

Ghost uses a simple templating language called [Handlebars](http://handlebarsjs.com/) for its themes.

We've documented our default theme pretty heavily so that it should be fairly easy to work out what's going on just by reading the code and the comments. Once you feel comfortable with how everything works, we also have full [theme API documentation](https://themes.ghost.org) which explains every possible Handlebars helper and template.

**The main files are:**

- `default.hbs` - The main template file
- `index.hbs` - Used for the home page
- `post.hbs` - Used for individual posts
- `page.hbs` - Used for individual pages
- `tag.hbs` - Used for tag archives
- `author.hbs` - Used for author archives

One really neat trick is that you can also create custom one-off templates just by adding the slug of a page to a template file. For example:

- `page-about.hbs` - Custom template for the `/about/` page
- `tag-news.hbs` - Custom template for `/tag/news/` archive
- `author-ali.hbs` - Custom template for `/author/ali/` archive


# SVG Icons

Casper uses inline SVG icons, included via Handlebars partials. You can find all icons inside `/partials/icons`. To use an icon just include the name of the relevant file, eg. To include the SVG icon in `/partials/icons/rss.hbs` - use `{{> "icons/rss"}}`.

You can add your own SVG icons in the same manner.


# Copyright & License

Copyright (c) 2013-2017 Ghost Foundation - Released under the [MIT license](LICENSE).
bs` - Custom template for `/author/ali/` archive


# SVG Icons

Casper uses inline SVG icons, included via Handlebars partials. You can find all icons inside `/partials/icons`. To use an icon just include the name of the relevant file, eg. To include the SVG icon in `/partials/icons/rss.hbs` - use `{{> "icons/rss"}}`.

You can add your own SVG icons in the same manner.


# Copyright & License

Copyright (c) 2013-2017 Ghost Foundation - Released under the [MIT license](LICENSE).
