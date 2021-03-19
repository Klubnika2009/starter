'use strict';

module.exports = () => {
  $.gulp.task('favicon', () => {
    return $.gulp.src([$.path.favicon.src])
      .pipe($.debug({title: 'favicon:'}))
      .pipe($.gulp.dest($.path.favicon.build))
  });
};