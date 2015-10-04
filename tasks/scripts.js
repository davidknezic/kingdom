import babelify from 'babelify'
import browserify from 'browserify'
import gulp from 'gulp'
import sourcemaps from 'gulp-sourcemaps'
import gutil from 'gulp-util'
import buffer from 'vinyl-buffer'
import source from 'vinyl-source-stream'
import envify from 'envify'

let b = browserify({
  entries: 'app/index.jsx',
  extensions: ['.jsx'],
  debug: true,
  transform: [babelify.configure({
    stage: 0
  }), envify]
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
