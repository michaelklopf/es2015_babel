var gulp = require('gulp')
//var babel = require("gulp-babel")
var concat = require('gulp-concat')
var using = require('gulp-using')
var browserify = require('gulp-browserify')

gulp.task('browserify', function() {
    gulp.src('jsbabel/main.js')
      .pipe(using())
      .pipe(browserify({transform: 'babelify'}))
      .pipe(concat('main.js'))
      .pipe(gulp.dest('./dist/js'))
})

gulp.task('copy', function() {
    gulp.src('views/index.html')
      .pipe(using())
      .pipe(gulp.dest('./dist'))
    gulp.src('css/*.*')
      .pipe(using())
      .pipe(gulp.dest('./dist/css'))
})

gulp.task('default', ['browserify', 'copy'])

gulp.task('watch', function() {
    gulp.watch('jsbabel/**/*.*', ['default'])
    gulp.watch('css/*.*', ['copy'])
})
