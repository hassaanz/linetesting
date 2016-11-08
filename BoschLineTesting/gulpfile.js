﻿var ts = require('gulp-typescript');
var gulp = require('gulp');
var clean = require('gulp-clean');
var modernizr = require('gulp-modernizr');
var merge = require('merge-stream');

var destPath = './libs/';

// Delete the dist directory
gulp.task('clean', function () {
    return gulp.src(destPath)
        .pipe(clean());
});

gulp.task("scriptsNStyles", () => {
    var coreScripts = gulp.src([
        'core-js/client/**',
        'systemjs/dist/system.src.js',
        'reflect-metadata/**',
        'rxjs/**',
        'zone.js/dist/**',
        '@angular/**',
        'jquery/dist/jquery.*js',
        'bootstrap/dist/js/bootstrap.*js',
        'ng2-material/**/*.js',
        'ng2-material/**/*.map',
        'respond.js/dest/respond.min.js'
    ], {
        cwd: "node_modules/**"
    })
        .pipe(gulp.dest("./libs"));
    
    // Build modernizr
    var browserScripts = gulp.src([
        'Scripts/**/*.js'
    ], {
        cwd: "node_modules/**"
    })
        .pipe(modernizr())
        .pipe(gulp.dest("./libs"));
    return merge(coreScripts, browserScripts);
});

var tsProject = ts.createProject('tsScripts/tsconfig.json', {
    typescript: require('typescript')
});
gulp.task('ts', function (done) {
    //var tsResult = tsProject.src()
    var tsResult = gulp.src([
        "tsScripts/*.ts"
    ])
    .pipe(ts(tsProject), undefined, ts.reporter.fullReporter());
    return tsResult.js.pipe(gulp.dest('./Scripts'));
});

gulp.task('watch', ['watch.ts']);

gulp.task('watch.ts', ['ts'], function () {
    return gulp.watch('tsScripts/*.ts', ['ts']);
});

gulp.task('default', ['scriptsNStyles', 'watch']);