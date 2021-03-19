'use strict';

module.exports = () => {

  $.gulp.task('scriptsDev', () => {
    return $.gulp.src($.path.scripts.src)
      .pipe($.webpackStream(
        {
          mode: 'development',
          output: {
            filename: 'main.js',
          },
          module: {
            rules: [{
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }]
          },
        }
      ))
      .on('error', function (err) {
        console.error('WEBPACK ERROR', err);
        this.emit('end'); // Don't stop the rest of the task
      })
      .pipe($.sourcemaps.init())
      .pipe($.rename({
        basename: 'scripts',
        suffix: '.min'
      }))
      .pipe($.sourcemaps.write('.'))
      .pipe($.debug({title: 'scriprs:'}))
      .pipe($.gulp.dest($.path.scripts.build))
      .on('end', $.browserSync.reload);
  });

  $.gulp.task('scriptsProd', () => {
    return $.gulp.src($.path.scripts.src)
      .pipe($.webpackStream(
        {
          mode: 'production',
          output: {
            filename: 'main.js',
          },
          module: {
            rules: [{
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }]
          },
        }
      ))
      .on('error', function (err) {
        console.error('WEBPACK ERROR', err);
        this.emit('end'); // Don't stop the rest of the task
      })
      .pipe($.rename({
        basename: 'scripts',
        suffix: '.min'
      }))
      .pipe($.debug({title: 'scriprs:'}))
      .pipe($.gulp.dest($.path.scripts.build))
      .on('end', $.browserSync.reload);
  });
};