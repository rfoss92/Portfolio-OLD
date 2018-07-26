const gulp = require('gulp');
const newer = require('gulp-newer');
const htmlclean = require('gulp-htmlclean');
const concat = require('gulp-concat');
const deporder = require('gulp-deporder');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const assets = require('postcss-assets');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const cssnano = require('cssnano');
const plumber = require('gulp-plumber');
const devBuild = (process.env.NODE_ENV === 'production');
const folder = {
	src: 'dev/',
	build: 'views/'
};

gulp.task('default', ['run', 'watch']);
gulp.task('run', ['html', 'partials', 'css', 'js']);
gulp.task('watch', () => {
  gulp.watch(folder.src + 'html/**/*', ['html']);
  gulp.watch(folder.src + 'partials/**/*', ['partials']);
  gulp.watch(folder.src + 'js/**/*', ['js']);
  gulp.watch(folder.src + 'css/**/*', ['css']);
});

// HTML processing
gulp.task('html', () => {
  let out = folder.build + '';
  let page = gulp.src(folder.src + 'html/*.hbs')
      .pipe(plumber())    
      .pipe(newer(out));
  if (!devBuild) {
    page = page.pipe(htmlclean());
  }
	{verbose: true}
	return page.pipe(gulp.dest(out));
});

// Partials processing
gulp.task('partials', () => {
  let out = folder.build + 'partials';
  let page = gulp.src(folder.src + 'partials/*.hbs')
      .pipe(plumber())    
      .pipe(newer(out));
  if (!devBuild) {
    page = page.pipe(htmlclean());
  }
	{verbose: true}
	return page.pipe(gulp.dest(out));
});

// JavaScript processing
gulp.task('js', () => {
  let jsbuild = gulp.src(folder.src + 'js/*.js')
    .pipe(plumber())      
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
gulp.task('css', () => {
  let postCssOpts = [
	  autoprefixer({ browsers: ['last 2 versions', '> 2%'] }),
	  mqpacker,
  ];
  if (!devBuild) {
    postCssOpts.push(cssnano);
  }
  return gulp.src(folder.src + 'css/*.css')
    .pipe(plumber())      
    .pipe(sass({
      outputStyle: 'nested',
      precision: 3,
      errLogToConsole: true,
    }))
    .pipe(postcss(postCssOpts))
    .pipe(gulp.dest(folder.build + 'css/'));
});