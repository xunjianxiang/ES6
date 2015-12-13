const gulp = require('gulp')
const watch = require('gulp-watch')
const browserSync = require('browser-sync')
const webpack = require('gulp-webpack')


gulp.task('babel', function () {
  return gulp.src('./scripts/*.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./dist'))
})

gulp.task('watch', function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
  watch('./scripts/*', function () {
    gulp.start('babel')
  })
  watch('./dist/*', function () {
    browserSync.reload()
  })
})

gulp.task('default', ['watch'])
