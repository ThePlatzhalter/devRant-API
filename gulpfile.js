let st     = require('st'),
    http   = require('http'),
    gulp   = require('gulp'),
    pump   = require('pump'),
    path   = require('path')
    aglio  = require('gulp-aglio'),
    concat = require('gulp-concat')

gulp.task('default', (cb) => {

    pump([
        gulp.src('./docs/**/*.apib'),
        concat('documentation.apib'),
        aglio({ themeTemplate: 'triple', themeVariables: 'flatly' }),
        gulp.dest('./dist')
    ], cb)

})

gulp.task('watch', [ 'default' ], () => {

    gulp.watch('./docs/**/*.apib', [ 'default' ])

})