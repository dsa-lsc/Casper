'use strict';

/*
    | GULP BUILD TOOL - verifies code, syncs browser, and creates public builds.
    |
    | TASKS:
    | - gulp watch - starts the browser sync server
    | - gulp lint  - runs jslint
    | - gulp build - compiles a build for prod
*/

// GULP - Gulp specific plugins & utility modules
var gulp         = require('gulp'),
gutil            = require('gulp-util'),
livereload       = require('gulp-livereload'),
nodemon          = require('gulp-nodemon'),

// CSS - CSS specific post processing modules
sourcemaps       = require('gulp-sourcemaps'),
autoprefixer     = require('autoprefixer'),
postcss          = require('gulp-postcss'),
colorFunction    = require('postcss-color-function'),
cssnano          = require('cssnano'),
customProperties = require('postcss-custom-properties'),
easyimport       = require('postcss-easy-import');

// JAVASCRIPT - JS specific processing modules

// CONFIG VARIABLES
var buildPath    = './build',
cssPath          = './assets/css/*.css',
jsPath           = './assets/js/**/*.js',
viewPath         = './templates/**/*.hbs';


var swallowError = function swallowError(error) {
    gutil.log(error.toString());
    gutil.beep();
    this.emit('end');
};

var nodemonServerInit = function () {
    livereload.listen(1234);
};

gulp.task('build', ['css'], function (/* cb */) {
    return nodemonServerInit();
});

gulp.task('css', function () {
    var processors = [
        easyimport,
        customProperties,
        colorFunction(),
        autoprefixer({browsers: ['last 2 versions']}),
        cssnano()
    ];
    gulp.src('assets/css/*.css')
        .on('error', swallowError)
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('assets/built/'))
        .pipe(livereload());
});

gulp.task('watch', function () {
    gulp.watch('assets/css/**', ['css']);
});

gulp.task('default', ['build'], function () {
    gulp.start('watch');
});
