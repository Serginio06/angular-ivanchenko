/**
 * Created by sergiiivanchenko on 19/06/2017.
 */

// grab our gulp packages
var gulp = require ('gulp'),
    gutil = require ('gulp-util'),
    jshint = require ('gulp-jshint'),
    sass = require ('gulp-sass');
// var uglify = require('gulp-uglify');
var uglify = require('gulp-uglify-es').default;

// var minify = require('gulp-minify');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');


// define the default task and add the watch task to it
gulp.task ('default', ['watch']);


// configure which files to watch and what tasks to use on file changes
gulp.task ('watch', function () {
    gulp.watch ('source/assets/javascript/**/*.js', ['logChanges', 'jshint']);
    gulp.watch ('source/assets/scss/**/*.scss', [ 'build-css']);
    gulp.watch ('source/assets/templates/**/*.*', [ 'templates-copy']);
    gulp.watch ('source/index.html', [ 'copyIndexFile']);
});

// // create a default task and just log a message
gulp.task ('logChanges', function () {
    return gutil.log ('Changes detected! Start checking....')
});

gulp.task('copyIndexFile', function () {
    gutil.log ('Index,html copying...');
    return gulp.src('source/index.html')
        .pipe(gulp.dest('public'))
});

gulp.task('templates-copy', function () {
    gutil.log ('Templates copying...');
    return gulp.src('source/assets/templates/**/*.*')
        .pipe(gulp.dest('public/assets/templates'))
});


// configure the jshint task
gulp.task ('jshint', function () {
    gutil.log ('Check js and copying...');
    var stream = gulp.src ('source/assets/javascript/**/*.js')
                     .pipe(sourcemaps.init())  // Process the original sources
                     .pipe (jshint ())
                     .pipe (jshint.reporter ('jshint-stylish'))
                     .pipe(concat('all.js'))
                     .pipe(uglify({mangle:false}))
                     .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
                     .pipe(sourcemaps.write()) // Add the map to modified source.
                     .pipe (gulp.dest ('public/assets/javascript'));

});

// compile css from sass
gulp.task('build-css', function() {
    gutil.log ('Building css from sass...');
    return gulp.src('source/assets/scss/**/*.scss')
               .pipe(sourcemaps.init())  // Process the original sources
               .pipe(sass ().on ('error', sass.logError))
               .pipe(sourcemaps.write()) // Add the map to modified source.
               .pipe(gulp.dest('public/assets/css'));
});

var myFun = function () {

};