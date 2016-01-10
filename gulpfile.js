(function (r) {
    "use strict";
    var LessPluginCleanCss = r('less-plugin-clean-css'),
        LessPluginAutoPrefix = r('less-plugin-autoprefix'),
        cleancss = new LessPluginCleanCss({
            advanced: true
        }),
        autoprefixer = new LessPluginAutoPrefix({
            browsers: ['last 2 versions'],
            cascade: false
        }),
        less = r('gulp-less'),
        rename = r('gulp-rename'),
        gulp = r('gulp'),
        sources = {
            less: './src/*.less'
        },
        targets = {
            less: __dirname
        };

    gulp.task('less', function () {
        return gulp.src(sources.less)
            .pipe(less({
                plugins: [autoprefixer]
            }))
            .pipe(gulp.dest(targets.less));
    });

    gulp.task('lessMin', function () {
        return gulp.src(sources.less)
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(less({
                plugins: [autoprefixer, cleancss]
            }))
            .pipe(gulp.dest(targets.less));
    });

    gulp.task('default', ['less', 'lessMin']);
}(require));