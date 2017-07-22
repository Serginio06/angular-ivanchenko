const manifest = require('./package.json');
const path = require('path');
const gulp = require('gulp');
const gutil = require('gulp-util');
const concat = require('gulp-concat');
// const webpack = require('webpack');
// const webpack = require('gulp-webpack');
// const webpack = require('webpack-stream');
const express = require('express');
const isProduction = gutil.env.production;
const sass = require ('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
var run = require('gulp-run');


gulp.task('webpackBuild', function() {
    return run('webpack').exec();
});

// gulp.task('webpackBuild', function() {
//     return gulp.src('src/components/index.js')
//                .pipe(webpack( require('./webpack.config.js') ))
//                .pipe(gulp.dest('build/'));
// });

// function build (watch, callback) {
//     var plugins = [
//         new webpack.DefinePlugin({
//             'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development')
//         })
//     ];cl
//
//     if (isProduction) {
//         plugins.push(new webpack.optimize.UglifyJsPlugin());
//     }
//
//     webpack({
//         plugins: plugins,
//         // cache: true,
//         watch: watch,
//         module: {
//             loaders: [
//                 { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
//             ]
//         },
//         // devtool: "#source-map",
//         entry: path.resolve(__dirname, 'src/main.js'),
//         output: {
//             filename: 'bundle.js',
//             path: path.resolve(__dirname, 'build')
//         }
//     }, function (err, stats) {
//         if (callback) callback();
//     });
// }

gulp.task('js', function (callback) {
    build(false, callback);
});

gulp.task('watch', function () {
    build(true);
});


// compile css from sass
gulp.task('build-css', function() {
    gutil.log ('Building css from sass...');
    return gulp.src('src/scss/**/*.scss')
               .pipe(sourcemaps.init())  // Process the original sources
               .pipe(concat('all.scss'))

               .pipe(sass ().on ('error', sass.logError))

               .pipe(sourcemaps.write())

                // Add the map to modified source.
               .pipe(gulp.dest('src/css'));
});

// copy components
// gulp.task('templates-copy', function () {
//     gutil.log ('Components copying...');
//     return gulp.src('source/assets/templates/**/*.*')
//                .pipe(gulp.dest('public/assets/templates'))
// });
//
gulp.task('copyIndexFile', function () {
    gutil.log ('Index.html copying...');
    return gulp.src('static/index.html')
               .pipe(gulp.dest('build'))
});

gulp.task('copyData', function () {
    gutil.log ('/Data copying...');
    return gulp.src('static/data/*.*')
               .pipe(gulp.dest('build/data'))
});

gulp.task('copyImages', function () {
    gutil.log ('/Images copying...');
    return gulp.src('static/images/**/*.*')
               .pipe(gulp.dest('build/images'))
});

gulp.task('copyVendors', function () {
// gulp.task('default', function () {
    gutil.log ('/Vendors copying...');
    return gulp.src('static/vendors/**/*.*')
               .pipe(gulp.dest('build/vendors'))
});

gulp.task('express', function () {
    var app = express();
    app.use(express.static(__dirname + '/static'));
    app.use(express.static(__dirname + '/build'));
    app.use(function (req, res) {
        res.sendFile(__dirname + '/build/index.html');
    });
    app.listen(process.env.PORT || 4000);
});

// configure which files to watch and what tasks to use on file changes
gulp.task ('watch', function () {
    // build(true);
    // gulp.watch ('source/assets/javascript/**/*.js', ['logChanges', 'jshint']);
    gulp.watch ('src/scss/**/*.scss', [ 'build-css']);
    gulp.watch ('static/data/*.*', [ 'copyData']);
    gulp.watch ('static/images/**/*.*', [ 'copyImages']);
    gulp.watch ('static/vendors/**/*.*', [ 'copyVendors']);
    // gulp.watch ('source/assets/templates/**/*.*', [ 'templates-copy']);
    gulp.watch ('static/index.html', [ 'copyIndexFile']);
    gulp.watch ('src/**/*.*', [ 'webpackBuild']);
});

// gulp.task ('default', function () {
//     return gutil.log ('Changes detected! Start checking....')
// });
//
// // define the default task and add the watch task to it
// gulp.task ('default', ['default']);

// gulp.task('build', ['js']);
// gulp.task('dev', ['build', 'watch', 'express']);
// gulp.task('default', ['build']);

// create a default task and just log a message
// gulp.task('default',['watch'], function() {
//     return gutil.log('Gulp is running!')
// });

// gulp.task('default', ['copyIndexFile', 'copyData', 'copyImages', 'copyVendors','build-css', 'webpackBuild', 'watch']);
gulp.task('default', ['build-css','copyVendors','copyIndexFile','webpackBuild','express', 'watch',]);
// gulp.task('default', ['webpackBuild']);