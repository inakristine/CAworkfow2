const gulp = require('gulp');
const { src, dest } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');

function css() {
    return src('sass/**/*.scss')
      .pipe(sass())
      .pipe(minifyCSS())
      .pipe(dest('css'))
      .pipe(browserSync.stream())
 
      
}

function bilder() {
  return src('src/images/*')
      .pipe(imagemin())
      .pipe(dest('dist/img'))
}

function watch(){
  browserSync.init({
    server: {
      baseDir: './',
    }
  });
  gulp.src('src/images/*', bilder)
  gulp.watch('./sass/**/*.scss', css);
  gulp.watch('./dist/*.html').on('change', browserSync.reload)
}

exports.watch = watch;




