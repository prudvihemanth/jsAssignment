/**
 * @file gulpfile.js
 * @description This file is for gulp tasks
 * @author Pruthvi Hemanth
 */

const gulp = require('gulp');
const jsdoc = require('gulp-jsdoc3');

gulp.task('doc', (cb) => {
  gulp.src(['README.md', './src/**/*.js'], { read: false })
    .pipe(jsdoc(cb));
});
