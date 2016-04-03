var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('vendor', function() {
    return gulp.src([
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-sanitize/angular-sanitize.min.js'
    ]).pipe(concat('vendor.js'))
    .pipe(uglify({ mangle: false }))
    .pipe(gulp.dest('public/js'));
});

gulp.task('bundle', function() {
    return gulp.src('js/**/*.js')
        .pipe(concat('bundle.js'))
        .pipe(uglify({ mangle: false }))
        .pipe(gulp.dest('public/js'));
});

gulp.task('default', ['vendor', 'bundle']);