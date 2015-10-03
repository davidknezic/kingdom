import gulp from 'gulp'
import webserver from 'gulp-webserver'

gulp.task('serve', function () {
  gulp.src(['dist', 'assets'])
    .pipe(webserver({
      livereload: true,
      host: '0.0.0.0',
      port: process.env.PORT || 80,
      fallback: 'index.html'
    }))
})
