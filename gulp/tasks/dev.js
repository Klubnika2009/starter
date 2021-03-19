'use strict';

module.exports = () => {
  $.gulp.task('dev', $.gulp.series('clean', 'favicon', 'fonts', 'html', 'stylesDev', 'scriptsDev', 'sprite', 'images', 'webp'));
};