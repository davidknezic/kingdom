import gulp from 'gulp'
import webserver from 'gulp-webserver'

let port = process.env.PORT || 8000

gulp.task('serve', function () {
  gulp.src(['dist', 'assets'])
    .pipe(webserver({
      livereload: true,
      host: '0.0.0.0',
      port: port,
      fallback: 'index.html'
    }))
})
