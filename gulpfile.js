'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require("gulp-autoprefixer");
const plumber = require('gulp-plumber');
const notify  = require('gulp-notify');
const browserSync = require("browser-sync");
const concat = require('gulp-concat');
const sourcemaps = require ('gulp-sourcemaps');
const pug = require('gulp-pug');
const minifycss  = require('gulp-minify-css');
const uglify = require("gulp-uglify");

let locationPath = {
	SCSS_FILE: 'assets/scss/**/*.scss',
	JS_FILE: 'assets/js_dev/**/*.js',
	PUG_FILE: 'assets/pug/**/*.pug',
	DATA_FILE: 'assets/pug/_data/',
	HTML_FILE: 'htdocs/**/*.html',
	DEST_DIR: 'assets/',
}

/*
 * server
 */
gulp.task('bs-sync', function(done) {
	browserSync({
		server: {
			baseDir: './htdocs/'
		},
		open: false
	});
	done();
});

gulp.task('bs-reload', function (done) {
	browserSync.reload();
	done();
});

/*
 * sass
 */
gulp.task('sass',function(done){
	gulp.src(locationPath.SCSS_FILE)
  .pipe(plumber({
    errorHandler: notify.onError('Error: <%= error.message %>')
  }))
  .pipe(sourcemaps.init())
  .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
  .pipe(autoprefixer({ cascade: false }))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(locationPath.DEST_DIR + 'css/'))
  .pipe(browserSync.reload({ stream: true }));
	done();
});

// gulp.task('sass-build',function(){
// 	gulp.src([SCSS_FILE])
// 	.pipe(plumber({
// 		errorHandler: notify.onError('Error: <%= error.message %>')
// 	}))
// 	.pipe(sass({outputStyle: 'compressed'}))
// 	.pipe(autoprefixer())
// 	.pipe(gulp.dest(DEST_DIR + 'css/'))
// });

/*
 * JS concat
 */
gulp.task('js-concat', function (done) {
	gulp.src([
		'assets/js_dev/swiper-bundle.js',
		'assets/js_dev/top.js',
	])
		.pipe(
			plumber({
				errorHandler: notify.onError('Error: <%= error.message %>'),
			}),
		)
		.pipe(concat('bundle.js'))
		.pipe(
			uglify({
				output: {
					comments: /^!/, ///*! //! で始まるコメントを残す
				},
			}),
		)
		.pipe(gulp.dest(locationPath.DEST_DIR + 'js/'))
	done();
});

//監視タスクの実行
gulp.task('default', gulp.series(gulp.parallel('sass', 'js-concat', 'bs-sync'), function () {
	gulp.watch(locationPath.SCSS_FILE, gulp.task('sass'));
	gulp.watch(locationPath.JS_FILE, gulp.task('js-concat'));
}));
