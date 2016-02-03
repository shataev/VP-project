var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var rename = require("gulp-rename");
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
var wiredep = require('wiredep').stream;


//connect
gulp.task('connect', function() {
    connect.server({
        root: 'httpdocs',
        livereload: true
    });
});

//html
gulp.task('html', function(){
    gulp.src('httpdocs/index.html')
        .pipe(connect.reload())
});

//css
gulp.task('css', function(){
    gulp.src('httpdocs/css/main.css')
        .pipe(connect.reload())
});

//watch
gulp.task('watch', function(){
    gulp.watch('httpdocs/index.html', ['html'])
    gulp.watch('httpdocs/css/main.css', ['css'])
});


//wiredep
gulp.task('bower', function () {
    gulp.src('httpdocs/index.html')
        .pipe(wiredep({
            directory: 'bower_components'
        }))
        .pipe(gulp.dest('httpdocs/'));
});

gulp.task('default', ['connect', 'html', 'watch']);