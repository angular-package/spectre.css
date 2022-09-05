const gulp = require("gulp");
const { series, parallel } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const cleancss = require('gulp-clean-css');
// const csscomb = require('gulp-csscomb');
const rename = require('gulp-rename');
const run = require('gulp-run');
const pug = require('gulp-pug');
const autoprefixer = require('gulp-autoprefixer');

function build() {
  return gulp
    .src('./src/*.scss')
    .pipe(sass({outputStyle: 'expanded'})
      .on('error', sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist'))
    .pipe(cleancss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist'));
}

function build_colors(cb) {
  const modules = [
    'bg',
    'buttons',
    'hero',
    'labels',
    'pagination',
    'text',
    'toasts'
  ];

  modules.forEach(function(module) {
    gulp
    .src([
      './src/' + module + '/colors/*.scss',
      './src/' + module + '/colors/**/*.scss'
    ])
    .pipe(sass({outputStyle: 'expanded'})
      .on('error', sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/' + module))
    .pipe(gulp.dest('./docs/dist/' + module))
    .pipe(cleancss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/' + module))
    .pipe(gulp.dest('./docs/dist/' + module));
  });

  cb();
}

function dist_clean(cb) {
  run('npm run remove:prod:dist').exec();
  cb();
}

function docs_clean(cb) {
  docs_clean_dist(cb);
  docs_clean_html(cb);
  cb();
}

function docs_clean_dist(cb) {
  run('npm run remove:docs:dist').exec();
  cb();
}

function docs_clean_html(cb) {
  run('npm run remove:docs:html').exec();
  cb();
}

function build_docs_css(cb) {
  gulp
    .src(['./src/*.scss', './docs/src/scss/*.scss'])
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

function build_docs_html() {
  return gulp
    .src('docs/src/**/!(_)*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./docs/'));
}

function watch() {
  gulp.watch('./**/*.scss', parallel(build, build_docs_css));
  gulp.watch('./**/*.pug', build_docs_html);
}

exports.watch = watch;
exports.build = series(dist_clean, parallel(build, build_colors));
exports.build_colors = build_colors;
exports.build_docs = series(docs_clean, parallel(build_docs_css, build_colors, build_docs_html));
exports.build_docs_css = series(docs_clean_dist, parallel(build_docs_css, build_colors));
exports.build_docs_html = build_docs_html;
exports.default = build;
