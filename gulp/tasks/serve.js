'use strict';

module.exports = () => {

  $.gulp.task('serve', () => {
    $.browserSync.init({
      server: {
        baseDir: $.path.build
      },
      notify: true, 
      // tunnel: 'sitename'  // Demonstration page: http://sitename.Loca.lt
      // online: true, // Work offline without internet connection
    });

    $.gulp.watch($.path.fonts.watch, $.gulp.series('fonts'));
    $.gulp.watch($.path.html.watch, $.gulp.series('html'));
    $.gulp.watch($.path.styles.watch, $.gulp.series('stylesDev'));
    $.gulp.watch($.path.scripts.watch, $.gulp.series('scriptsDev'));
    $.gulp.watch($.path.images.watch, $.gulp.series('images'));
    $.gulp.watch($.path.webp.watch, $.gulp.series('webp'));
    $.gulp.watch($.path.sprite.watch, $.gulp.series('sprite'));

  });

};