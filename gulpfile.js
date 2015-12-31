const gulp = require('gulp')
const watch = require('gulp-watch')
const browserSync = require('browser-sync')
const webpack = require('gulp-webpack')

gulp.task('babel', function () {
	return gulp.src('./scripts/*.js')
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(gulp.dest('./dist'))
})


gulp.task('test', function () {
	return gulp.src('./test.js')
		.pipe(mocha())
		.once('error', function () {
			process.exit(1)
		})
		.once('end', function () {
			process.exit()
		})
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
	watch('./test.js', function () {
		gulp.start('test')
	})
	watch('./dist/*', function () {
		browserSync.reload()
	})
	watch('./views/*.html', function () {
		browserSync.reload()
	})
})
	
gulp.task('default', ['watch'])
