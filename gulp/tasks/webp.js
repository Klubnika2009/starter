'use strict';

module.exports = () => {
  $.gulp.task('webp', () => {
    return $.gulp.src($.path.webp.src)
      .pipe($.webp())
      .pipe($.debug({title: 'webp:'}))
      .pipe($.gulp.dest($.path.webp.build))
      .on('end', $.browserSync.reload);
  });
};