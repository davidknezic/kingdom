var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('dev', ['build'], function (cb) {
  gulp.start('serve')

  watch([
    'app/**/*.less'
  ], function () {
    gulp.start('styles')
  })

  watch([
    'app/**/*.jsx',
    'app/**/*.js'
  ], function () {
    gulp.start('scripts')
  })

  watch([
    'app/index.html'
  ], function () {
    gulp.start('static')
  })
})
