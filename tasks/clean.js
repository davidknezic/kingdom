import gulp from 'gulp'
import del from 'del'

gulp.task('clean', function (cb) {
  del('dist', cb)
})
