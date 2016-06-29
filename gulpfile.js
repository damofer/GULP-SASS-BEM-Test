 var gulp = require('gulp'),
 	  uglify = require('gulp-uglify'),
 	  sass = require('gulp-sass'),
 	  plumber = require('gulp-plumber')
 	  livereload = require('gulp-livereload')
 	  imagemin = require('gulp-imagemin')
 	  prefix = require('gulp-autoprefixer');

// Scripts Task
//Uglifies
gulp.task('scripts', function(){
	gulp.src('js/**/*.js')
	.pipe(plumber())
	.pipe(uglify())
	.pipe(gulp.dest('build/js'));
});

// Styles Task
//Uglifies
gulp.task('styles', function(){
	gulp.src('sass/**/*.scss')
	.pipe(plumber())
	.pipe(sass({
		outputStyle: 'compressed'
	}))
	.pipe(prefix('last 2 versions'))
	.pipe(gulp.dest('build/css'))
	.pipe(livereload());
});

//Images Task
//Min
gulp.task('image', function(){
	gulp.src('img/*')
	.pipe(imagemin())
	.pipe(gulp.dest('img'));

});

//Watch Task
//Watch JS
gulp.task('watch', function() {


	livereload.listen();
	gulp.watch('js/**/*.js', ['scripts'])
	gulp.watch('sass/**/*.scss', ['styles'])
});

 gulp.task('default', ['scripts', 'styles', 'watch']);