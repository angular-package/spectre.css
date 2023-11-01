const gulp = require("gulp");
const { series, parallel } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const cleancss = require('gulp-clean-css');
// const csscomb = require('gulp-csscomb');
const rename = require('gulp-rename');
const run = require('gulp-run');
const pug = require('gulp-pug');
const autoprefixer = require('gulp-autoprefixer');

/**
 * Build main spectre CSS files.
 * @returns
 */
function build() {
  return gulp
    .src([
      './src/spectre.core.scss',
      './src/spectre.css.scss',
      // './src/spectre.scss',
      // './src/spectre.exp.scss',
      // './src/spectre.icons.scss',
    ])
    .pipe(sass({outputStyle: 'expanded', includePaths: ['node_modules']}).on('error', sass.logError))
    .pipe(autoprefixer({cascade: false}))
    .pipe(gulp.dest('./dist'))
    .pipe(cleancss({inline: ['none']}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist'));
}

/**
 * Build Spectre CSS modules files.
 * @param {*} cb
 */
function build_module(cb) {
  var modules = [];
  var i = 0;
  process.argv.find(element => {
    if (element.includes('--module')) {
      const selected_modules = element.split('--module=').slice(1)[0].split(',');
      if (selected_modules.length > 0) {
        modules = selected_modules;
      }
    }
    i++;
  });
  if (modules.length == 0) {
    modules = [
      'css-variables',
      'accordions',
      'animations',
      'avatars',
      'badges',
      'bars',
      'bg',
      'borders',
      'breadcrumbs',
      'buttons',
      'calendars',
      'cards',
      'carousels',
      'chips',
      'codes',
      'dots',
      'dropdowns',
      'empty',
      'footer',
      'forms',
      'hero',
      'icons',
      'labels',
      'layout',
      'menus',
      'meters',
      'modals',
      'navbar',
      'navs',
      'off-canvas',
      'overlays',
      'paginations',
      'panels',
      'parallax',
      'popovers',
      'progress',
      'sidebars',
      'sliders',
      'steps',
      'tables',
      'tabs',
      'test',
      'text',
      'tiles',
      'timelines',
      'toasts',
      'tooltips',
      'utilities'
    ];
  }

  if (modules.length > 0) {
    modules.forEach(function(module) {
      gulp
      .src([
        './src/' + module + '/*.scss',
        './src/' + module + '/**/*.scss',
        './src/' + module + '/**/**/*.scss',
      ])
      .pipe(sass({outputStyle: 'expanded', includePaths: ['node_modules']}).on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(gulp.dest('./dist/' + module))
      .pipe(cleancss({inline: ['none']}))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./dist/' + module));
    });
  }

  cb();
}

/**
 * Clean production folder.
 * @param {*} cb
 */
function dist_clean(cb) {
  run('npm run remove:prod:dist').exec();
  cb();
}

/**
 * Clean documentation folder CSS and HTML files.
 * @param {*} cb
 */
function docs_clean(cb) {
  docs_clean_css(cb);
  docs_clean_html(cb);
  cb();
}

/**
 * Clean production folder in the documentation.
 * @param {*} cb
 */
function docs_clean_css(cb) {
  run('npm run remove:docs:dist').exec();
  cb();
}

/**
 * Clean HTML documentation files.
 * @param {*} cb
 */
function docs_clean_html(cb) {
  run('npm run remove:docs:html').exec();
  cb();
}

/**
 * Build documentation CSS files.
 * @param {*} cb
 */
function build_docs_css(cb) {
  gulp
    .src(['./docs/src/scss/*.scss'])
    .pipe(sass.sync({outputStyle: 'expanded', precision: 10})
      .on('error', sass.logError)
    )
    .pipe(autoprefixer())
    // .pipe(csscomb())
    .pipe(gulp.dest('./docs/dist'))
    .pipe(cleancss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./docs/dist'));
  cb();
}

/**
 * Build HTML documentation files.
 * @returns
 */
function build_docs_html() {
  return gulp
    .src('docs/src/**/!(_)*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./docs/'));
}

/**
 * Watch the build.
 */
function watch() {
  gulp.watch('./**/*.scss', parallel(build, build_docs_css));
  gulp.watch('./**/*.pug', build_docs_html);
}

exports.watch = watch;
exports.build = series(dist_clean, parallel(build, build_module));
exports.build_module = build_module;
exports.build_dist = series(build);
exports.build_docs = series(docs_clean, parallel(build_docs_css, build_docs_html));
exports.build_docs_css = series(docs_clean_css, parallel(build_docs_css));
exports.build_docs_html = series(docs_clean_html, parallel(build_docs_html));
exports.default = build;
exports.clean_docs = docs_clean;
