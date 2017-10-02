var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins({ DEBAG: true });

gulp.task('sass-compile' , function () {
	return gulp
		.src('scss/index.scss')
		  .pipe(plugins.sass({outputStyle: 'expanded'}))
		  .pipe(plugins.autoprefixer())
		  .pipe(plugins.rename('btcss.css'))
		  .pipe(gulp.dest('css'))
});

gulp.task('css-minify', function (){
  return gulp.src('css/btcss.css')
    .pipe(plugins.cssnano())
    .pipe(plugins.rename({ suffix: ".min"}))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
	gulp.watch('scss/**/*.scss', ['sass-compile'])
});

gulp.task('default', ['sass-compile', 'watch']);












