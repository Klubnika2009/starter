'use strict';
const syntax = 'sass'; // Syntax: sass or scss;

global.$ = {
  gulp: require('gulp'),
  debug: require('gulp-debug'),
  // ! Html
  fileInclude: require('gulp-file-include'),
  beautify: require('gulp-beautify'),
  removeHtmlComments: require('gulp-remove-html-comments'),
  // ! Styles
  sass: require('gulp-sass'),
  rename: require('gulp-rename'),
  cleanCss: require('gulp-clean-css'),
  sourcemaps: require('gulp-sourcemaps'),
  autoprefixer: require('gulp-autoprefixer'),
  plumber: require('gulp-plumber'),
  notify: require('gulp-notify'),
  groupMediaCss: require('gulp-group-css-media-queries'),
  removeCssComments: require('gulp-strip-css-comments'),
  webpcss: require('gulp-webp-css'),
  // ! Scripts
  webpack: require('webpack'),
  webpackStream: require('webpack-stream'),
  // ! images
  newer: require('gulp-newer'),
  image: require('gulp-image'),
  // ! SVG Sprite
  cheerio: require('gulp-cheerio'),
  replace: require('gulp-replace'),
  svgsprite: require('gulp-svg-sprite'),
  // ! Webp
  webp: require('gulp-webp'),
  webpHtml: require('gulp-webp-html'),
  // ! Clean
  del: require('del'),
  // ! Server
  browserSync: require('browser-sync').create(),
  path: {
    config: require('./gulp/config'),
    build: './build',
    html: {
      src: './app/**/*.html',
      build: './build',
      watch: './app/**/*.html'
    },
    styles: {
      src: './app/'+syntax+'/**/*.'+syntax+'',
      build: './build/css',
      watch: './app/'+syntax+'/**/*.'+syntax+''
    },
    scripts: {
      src: './app/js/**/*.js',
      build: './build/js',
      watch: './app/js/**/*.js'
    },
    images: {
      src: './app/images/**/*.{jpg,jpeg,png,gif,tiff,svg}',
      build: './build/images',
      watch: './app/images/**/*.{jpg,jpeg,png,gif,tiff,svg}'
    },
    sprite: {
      src: './app/images/**/*.svg',
      build: './build/images',
      watch: './app/images/**/*.svg'
    },
    webp: {
      src: ['./app/images/**/*.{jpg,jpeg,png}', '!./app/images/favicon/*.{jpg,jpeg,png}'],
      build: './build/images',
      watch: './app/images/**/*.{jpg,jpeg,png}'
    },
    favicon: {
      src: './app/images/favicon/*.{xml,ico,png,json}',
      build: './build/images/favicon',
      watch: './app/images/favicon/*.{xml,ico,png,json}'
    },
    fonts: {
      src: './app/fonts/**/*.{woff,woff2,ttf,eot}',
      build: './build/fonts',
      watch: './app/fonts/**/*.{woff,woff2,ttf,eot}'
    },
  }
}

$.path.config.forEach(function (path) {
  require(path)();
});