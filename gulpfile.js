var gulp       = require('gulp'),
    browserify = require('gulp-browserify');

gulp.task('scripts', function () {

    gulp.src(['app/client/grid-client.js','app/client/todos-client.js','app/client/products-client.js' ])
        .pipe(browserify({
            debug: true,
            transform: [ 'reactify' ]
        }))
        .pipe(gulp.dest('./public/scripts/'));

});

gulp.task('default', ['scripts']);

