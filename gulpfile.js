var gulp = require('gulp');
var gulpUtil = require("gulp-util");
var path = require('path');
var webpack = require('gulp-webpack-build');

var src = './',
    dest = './',
    webpackOptions = {
        debug: true,
        devtool: '#source-map',
        watchDelay: 200
    },
    webpackConfig = {
        useMemoryFs: true,
        progress: true
    },
    CONFIG_FILENAME = './webpack.config.js',
    lintSrc = [
        '.common/**/*.js'];

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('webpack', [], function() {
    return gulp.src(path.join(CONFIG_FILENAME), { base: path.resolve(src) })
        .pipe(webpack.init(webpackConfig))
        .pipe(webpack.props(webpackOptions))
        .pipe(webpack.run())
        .pipe(webpack.format({
            version: false,
            timings: true
        }))
        .pipe(webpack.failAfter({
            errors: true,
            warnings: true
        }))
        .pipe(gulp.dest(dest));
});

gulp.task('webpack:watch', ['webpack'], function() {
    livereload.listen();
    gulp.watch('./*.js', ['webpack']);
});
