import gulp from 'gulp'
import merge from 'merge-stream'

gulp.task('static', function () {
  let html = gulp.src(['app/index.html', 'app/test.json'])
    .pipe(gulp.dest('dist'))

  let fonts = gulp.src('node_modules/OneUI/src/assets/fonts/*')
    .pipe(gulp.dest('dist/fonts'))

  return merge(html, fonts)
})
