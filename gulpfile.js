var gulp = require('gulp')
//var babel = require("gulp-babel")
var concat = require('gulp-concat')
var using = require('gulp-using')
var babel = require('gulp-babel')

gulp.task('browserify', function() {
    gulp.src('jsbabel/main.js')
      .pipe(using())
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(concat('main.js'))
      .pipe(gulp.dest('./dist/js'))
    gulp.src('jsbabel/es6.js')
      .pipe(using())
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(concat('es6.js'))
      .pipe(gulp.dest('./dist/js'))
})

gulp.task('copy', function() {
    gulp.src('views/*.html')
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
