import gulp from 'gulp'
import webserver from 'gulp-webserver'

let port = process.env.VCAP_APP_PORT || 8000
let host = process.env.VCAP_APP_HOST || '0.0.0.0'

gulp.task('serve', function () {
  gulp.src(['dist', 'assets'])
    .pipe(webserver({
      livereload: true,
      host: host,
      port: port,
      fallback: 'index.html'
    }))
})
