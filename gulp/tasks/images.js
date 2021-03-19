'use strict';

module.exports = () => {

  $.gulp.task('images', () => {
    return $.gulp.src($.path.images.src)
      .pipe($.newer($.path.images.build))
      .pipe($.image({
        optipng: ['-i 1', '-strip all', '-fix', '-o7', '-force'],
        pngquant: ['--speed=1', '--force', 256],
        zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
        jpegRecompress: ['--strip', '--quality', 'medium', '--min', 40, '--max', 80],
        mozjpeg: ['-optimize', '-progressive'],
        gifsicle: ['--optimize'],
        svgo: ['--enable', 'cleanupIDs', '--disable', 'convertColors']
      }))
      .pipe($.gulp.dest($.path.images.build))
      .on('end', $.browserSync.reload);
  });

};