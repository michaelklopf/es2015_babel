var gulp = require('gulp')
//var babel = require("gulp-babel")
var concat = require('gulp-concat')
var using = require('gulp-using')
var babel = require('gulp-babel')
var nodemon = require('gulp-nodemon')

gulp.task('babel', function() {
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

gulp.task('develop', function () {
  nodemon({ script: 'app.js',
          ext: 'html js',
          tasks: ['babel'],
          ignore: ['dist/*']
  })
  .on('restart', function () {
    console.log('restarted!')
  })
})

gulp.task('default', ['copy', 'develop'])
