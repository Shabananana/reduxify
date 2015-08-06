var gulp = require('gulp');
var gulpUtil = require("gulp-util");
var path = require('path');
var sass = require('gulp-sass');
var webpack = require('gulp-webpack-build');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');
var bourbon = require('node-bourbon');
var lab = require('gulp-lab');
var jshint = require('gulp-jshint');
var shell = require('gulp-shell');


var src = './',
    dest = './dist',
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
        './server/**/*.js',
        '.server/**/*.jsx',
        '.common/**/*.js',
        '.common/**/*.jsx',
        '.client/**/*.js',
        '.client/**/*.jsx'];

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('lint', function() {
    return gulp.src(lintSrc)
        // This is available for modules like jshint-jsx, which
        // expose the normal jshint function as JSHINT and the
        // jsxhint function as JSXHINT
        .pipe(jshint({
            linter: require('jshint-jsx').JSXHINT,
            esnext: true
        }))
        .pipe(jshint.reporter('jshint-stylish', { verbose: true }));
});

gulp.task('server-test', function() {
    return gulp.src('./server/test/**/*.js')
        .pipe(lab('-T node_modules/lab-babel/ -t 100 -S -m 10000'));
});

gulp.task('client-test', shell.task('npm test'));

gulp.task('test', ['server-test', 'client-test']);

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

gulp.task('watch:all', ['server:watch'], function() {});

gulp.task('watch:client', ['webpack:watch', 'sass:watch'], function() {});

gulp.task('server:watch', ['webpack:watch', 'sass:watch'], function(){
    gulp.watch('./');
    nodemon({
        script: 'server.js',
        ext:    'js jsx',
        exec:   './node_modules/babel/bin/babel-node.js' //TODO: fix this relative path issue
    })
    .on('restart', function () {
      gulp.src('server.js')
        .pipe(livereload())
    })
});

gulp.task('webpack:watch', ['webpack'], function() {
    livereload.listen();
    gulp.watch('./*.js', ['webpack']);
});

gulp.task('sass', function () {
  gulp.src('./client/styles/*.scss')
    .pipe(sass({includePaths: bourbon.includePaths}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', ['sass'], function () {
  gulp.watch('./client/styles/*.scss', ['sass']);
});

gulp.task('build', ['webpack', 'sass'], function() { });
