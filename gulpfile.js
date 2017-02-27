const gulp = require('gulp')
const watch = require('gulp-watch')
const browserSync = require('browser-sync')
const webpack = require('gulp-webpack')

gulp.task('babel', () => {
	return gulp.src('./scripts/*.js')
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(gulp.dest('./dist'))
})

gulp.task('watch', () => {
	browserSync.init({
		server: {
			baseDir: './'
		}
	})
	watch('./scripts/*', () => {
		gulp.start('babel')
	})
	watch('./dist/*', () => {
		browserSync.reload()
	})
	watch('./views/*.html', () => {
		browserSync.reload()
	})
})

gulp.task('default', ['watch'])

console.log('This is first test for git rebase on master')
console.log('This is second test for git rebase on master ')
