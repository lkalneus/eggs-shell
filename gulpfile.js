var
    gulp         = require('gulp'),
    browserSync  = require('browser-sync'),

    less = require('gulp-less');

gulp.task('browser-sync', function () {
    browserSync({
        server: { baseDir: '.' },
        startPath: 'main.html'
    });
});

gulp.task('less', function () {
    return gulp.src('dev/less/main.less')
    .pipe(less())
    .pipe(gulp.dest('build/css'));
});

gulp.task('watch', function () {
    gulp.watch('dev/less/*.less', ['less'], browserSync.reload);
    gulp.watch('*.html', browserSync.reload);
});

gulp.task('build', ['less']);

gulp.task('default', ['watch', 'build', 'browser-sync']);

