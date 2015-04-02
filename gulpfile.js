var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
 
gulp.task('scripts', function() {
    return browserify('app/client/grid-client.js','app/client/todos-client.js','app/client/products-client.js')
        .bundle()
        //Pass desired output filename to vinyl-source-stream  .pipe(source('bundle.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./public/scripts/'));
});

/*
var browserify = require('gulp-browserify');

gulp.task('scripts', function () {

    gulp.src(['app/client/grid-client.js','app/client/todos-client.js','app/client/products-client.js' ])
        .pipe(browserify({
            debug: true,
            transform: [ 'reactify' ]
        }))
        .pipe(gulp.dest('./public/scripts/'));

});
*/

gulp.task('default', ['scripts']);
