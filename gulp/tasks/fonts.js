'use strict';

module.exports = () => {
  $.gulp.task('fonts', () => {
    return $.gulp.src([$.path.fonts.src])
    .pipe($.debug({title: 'fonts:'}))
      .pipe($.gulp.dest($.path.fonts.build))
      .on('end', $.browserSync.reload);
  });
};