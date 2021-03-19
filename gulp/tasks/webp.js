'use strict';

module.exports = () => {
  $.gulp.task('webp', () => {
    return $.gulp.src($.path.webp.src)
      .pipe($.newer($.path.webp.build))
      .pipe($.webp())
      .pipe($.debug({title: 'webp:'}))
      .pipe($.gulp.dest($.path.webp.build))
      .on('end', $.browserSync.reload);
  });
};