var gulp = require('gulp')
var babel = require("gulp-babel")
var concat = require('gulp-concat')
var using = require('gulp-using')

gulp.task('browserify', function() {
    gulp.src('jsbabel/main.js')
      .pipe(using())
      .pipe(babel())
      .pipe(concat('main.js'))
      .pipe(gulp.dest('./dist/js'))
})

gulp.task('copy', function() {
    gulp.src('views/index.html')
      .pipe(using())
      .pipe(gulp.dest('./dist'))
})

gulp.task('default', ['browserify', 'copy'])

gulp.task('watch', function() {
    gulp.watch('static/**/*.*', ['default'])
})
