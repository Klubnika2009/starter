'use strict';

module.exports = () => {
  $.gulp.task('prod', $.gulp.series('clean', 'favicon', 'fonts', 'html', 'stylesProd', 'scriptsProd', 'sprite', 'images', 'webp'));
};