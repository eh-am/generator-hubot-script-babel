'use strict';
var path = require('path');
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var excludeGitignore = require('gulp-exclude-gitignore');
var nsp = require('gulp-nsp');

gulp.task('static', function() {
	return gulp.src(['**/*.js', '!generators/app/templates/{src,test}/index.js'])
		.pipe(excludeGitignore())
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

gulp.task('nsp', function(cb) {
	nsp({
		'package': path.resolve('package.json')
	}, cb);
});

gulp.task('prepublish', ['nsp']);
gulp.task('default', ['static']);
