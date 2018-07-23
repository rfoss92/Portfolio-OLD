// Gulp.js configuration
var
	gulp = require('gulp'),
	newer = require('gulp-newer'),
	imagemin = require('gulp-imagemin'),
	htmlclean = require('gulp-htmlclean'),
	concat = require('gulp-concat'),
	deporder = require('gulp-deporder'),
	stripdebug = require('gulp-strip-debug'),
	uglify = require('gulp-uglify'),
	gulp = require('gulp'),
	babel = require('gulp-babel'),
	sass = require('gulp-sass'),
	postcss = require('gulp-postcss'),
	assets = require('postcss-assets'),
	autoprefixer = require('autoprefixer'),
	mqpacker = require('css-mqpacker'),
	cssnano = require('cssnano'),

	// Dev mode
	devBuild = (process.env.NODE_ENV === 'production'),


	// folders
	folder = {
		src: 'dev/',
		build: 'views/'
	}
;

// default task
gulp.task('default', ['run', 'watch']);

// run all tasks
gulp.task('run', ['html', 'partials', 'css', 'js']);

// HTML processing
gulp.task('html', function () {
  var
    out = folder.build + '',
    page = gulp.src(folder.src + 'html/*.hbs')
      .pipe(newer(out));

  // minify production code
  if (!devBuild) {
    page = page.pipe(htmlclean());
  }

	{verbose: true}
	return page.pipe(gulp.dest(out));
});

// Partials processing
gulp.task('partials', function () {
  var
    out = folder.build + 'partials',
    page = gulp.src(folder.src + 'partials/*.hbs')
      .pipe(newer(out));

  // minify production code
  if (!devBuild) {
    page = page.pipe(htmlclean());
  }

	{verbose: true}
	return page.pipe(gulp.dest(out));
});
// JavaScript processing
gulp.task('js', function () {

  var jsbuild = gulp.src(folder.src + 'js/*.js')
    .pipe(babel({
        presets: ['env'],
    }))
    .pipe(gulp.dest(folder.build + 'js/'));

  if (!devBuild) {
    jsbuild = jsbuild
		.pipe(uglify());
  }

  return jsbuild.pipe(gulp.dest(folder.build + 'js/'));
});

// CSS processing
gulp.task('css', function () {

  var postCssOpts = [
	  autoprefixer({ browsers: ['last 2 versions', '> 2%'] }),
	  mqpacker,
  ];

  if (!devBuild) {
    postCssOpts.push(cssnano);
  }

  return gulp.src(folder.src + 'css/*.css')
    .pipe(sass({
      outputStyle: 'nested',
      precision: 3,
      errLogToConsole: true,
    }))
    .pipe(postcss(postCssOpts))
    .pipe(gulp.dest(folder.build + 'css/'));
});

// watch for changes
gulp.task('watch', function () {

  // html changes
  gulp.watch(folder.src + 'html/**/*', ['html']);

  // partials changes
  gulp.watch(folder.src + 'partials/**/*', ['partials']);

  // javascript changes
  gulp.watch(folder.src + 'js/**/*', ['js']);

  // css changes
  gulp.watch(folder.src + 'css/**/*', ['css']);

});
