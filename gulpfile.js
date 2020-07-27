const {series} = require('gulp');
const {watch} = require('gulp');
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');

function concatCss(cb) {
    // place code for your default task here
    gulp.src('./src/scss/*/*.scss')
      .pipe(sass())
      .pipe(concat('styles.css'))
      .pipe(gulp.dest('./dist/css/'));
    cb();
  }
function minifyCss(cb) {
    // place code for your default task here
    gulp.src('./dist/css/styles.css')
      .pipe(rename("styles.min.css"))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('./dist/css/'));
    cb();
  }

  function concatJs(cb) {
    // place code for your default task here
    gulp.src('./src/js/*/*.js')
      .pipe(concat('script.js'))
      .pipe(gulp.dest('./dist/js/'));
    cb();
  }
  function minifyJs(cb) {
    // place code for your default task here
    gulp.src('./dist/js/script.js')
      .pipe(rename("script.min.js"))
      .pipe(uglify())
      .pipe(gulp.dest('./dist/js/'));
    cb();
  }

  exports.build = series(concatCss,minifyCss,concatJs,minifyJs);

  //exports.bootstrap = bootstrap;
  exports.default = function(){
    watch('./src/scss/*/*.scss', concatCss);
    watch('./dist/css/styles.css', minifyCss);
    watch('./src/js/*/*.js', concatJs);
    watch('./dist/js/script.js', minifyJs);
  }

