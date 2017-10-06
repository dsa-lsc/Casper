'use strict';

/*
    | GULP BUILD TOOL
      Verifies code, syncs browser, and creates public builds.

      !** This should be carried over for any new theme. It is a upgraded cleaner version of Ghost's default. **!

    | TASKS:
       `gulp` - runs gulp watch
       `gulp watch` - builds for dev (sourcemaps, unminifieds) & activates live reload
       `gulp lint`  - runs lint
       `gulp build` - compiles a build for prod
*/

// GULP MODULES - Gulp specific plugins & utility modules
var gulp     = require('gulp'),
gutil        = require('gulp-util'),
livereload   = require('gulp-livereload'),
nodemon      = require('gulp-nodemon'),
concat       = require('gulp-concat'),

// CSS MODULES - CSS specific post processing modules
sass         = require('gulp-sass'),
sourcemaps   = require('gulp-sourcemaps'),
autoprefixer = require('gulp-autoprefixer'),

// JAVASCRIPT MODULES - JS specific processing modules
jshintLib    = require('jshint'),
jshint       = require('gulp-jshint'),
jshintStyle  = require('jshint-stylish'),
uglify       = require('gulp-uglify'),

// ASSET PATHS
buildPath    = './assets/built',
scssPath     = './assets/scss/*.scss',
jsPath       = './assets/js/*.js';


// -- FUNCTIONS --
function errorAlert(error) {
    gutil.log(error.toString());
    gutil.beep();
    this.emit('end');
}

function nodemonServerInit() {
    livereload.listen(1234);
}


// -- CSS/SASS TASKS --
gulp.task('css:dev', function() {
    return gulp.src(scssPath)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' })
            .on('error', sass.logError))

        .pipe(autoprefixer('last 2 versions'))
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(buildPath))
        .pipe(livereload())
        .on('error', errorAlert);
});

gulp.task('css:prod', function() {
    return gulp.src(scssPath)
        .pipe(sass({ outputStyle: 'compressed' })
            .on('error', sass.logError))

        .pipe(autoprefixer('last 2 versions'))
        .pipe(concat('main.css'))
        .pipe(gulp.dest(buildPath))
        .on('error', errorAlert);
});


// -- JAVASCRIPT TASKS --
gulp.task('lint', function() {
    return gulp.src(jsPath)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('scripts:dev', function() {
    return gulp.src(jsPath)
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(buildPath))
        .pipe(livereload())
        .on('error', errorAlert);
});

gulp.task('scripts:prod', function() {
    return gulp.src(jsPath)
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest(buildPath))
        .on('error', errorAlert);
});


// -- MAIN RUN TASKS --

//Default - watches...
gulp.task('default', ['watch']);

//Build & watch for dev
gulp.task('watch', ['css:dev', 'lint', 'scripts:dev'], function() {
    nodemonServerInit();

    gulp.watch(scssPath, ['css:dev']);
    gulp.watch(jsPath, ['lint']);
    gulp.watch(jsPath, ['scripts:dev']);
});

// Build for production
gulp.task('build', ['css:prod', 'lint', 'scripts:prod']);


