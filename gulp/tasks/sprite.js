'use strict';

module.exports = () => {
  $.gulp.task('sprite', () => {
    return $.gulp.src($.path.sprite.src)
      .pipe($.cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: {xmlMode: true}
      }))
      .pipe($.replace('&gt;', '>'))
      .pipe($.svgsprite({
        mode: {
          symbol: {
            sprite: 'sprite.svg'
          },
          preview: {
            sprite: 'index.html'
          }
        }
      }))
      .pipe($.debug({title: 'sprite:'}))
      .pipe($.gulp.dest($.path.sprite.build))
      .on('end', $.browserSync.reload);
  });
};