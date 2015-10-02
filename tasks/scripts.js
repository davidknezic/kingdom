import babelify from 'babelify'
import browserify from 'browserify'
import gulp from 'gulp'
import sourcemaps from 'gulp-sourcemaps'
import gutil from 'gulp-util'
import buffer from 'vinyl-buffer'
import source from 'vinyl-source-stream'

let b = browserify({
  entries: 'app/index.jsx',
  extensions: ['.jsx'],
  debug: true,
  transform: [babelify]
})

gulp.task('scripts', function () {
  return b.bundle()
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
      .on('error', gutil.log)
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('dist'))
})
