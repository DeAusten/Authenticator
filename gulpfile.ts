"use strict";

const gulp = require("gulp");
const del = require("del");
const tsc = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const tsProject = tsc.createProject("tsconfig.json");
const tslint = require('gulp-tslint');
const gulpUtil = require('gulp-util');
const sass = require('gulp-ruby-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const notify = require('gulp-notify');
const cache = require('gulp-cache');
   
    
/**
 * Remove build directory.
 */
gulp.task('clean', (cb) => {
    return del(["dist"], cb);
});


/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', () => {
    return gulp.src("src/**/*.ts")
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});


/**
 * Compile TypeScript sources and create sourcemaps in dist directory.
 */
gulp.task("compile", ["tslint"], () => {
    let tsResult = gulp.src("src/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("dist"));
});


/**
 * Compile Sass, Autoprefix and minify.
 */
gulp.task('sass', function () {
    return sass('src/content/scss/*.scss', { style: 'expanded' })
      .pipe(autoprefixer('last 2 version'))
      .pipe(gulp.dest('dist/content/css'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(cssnano())
      .pipe(gulp.dest('dist/content/css'))
      .pipe(notify({ message: 'Sass task complete' }));
});


/**
 * Copy Css and minify.
 */
gulp.task('css', function () {
    return gulp.src('src/content/css/*.css')
      .pipe(autoprefixer('last 2 version'))
      .pipe(gulp.dest('dist/content/css'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(cssnano())
      .pipe(gulp.dest('dist/content/css'))
      .pipe(notify({ message: 'Css task complete' }));
});


/**
 * Copy and compress images
 */
gulp.task('images', function () {
    return gulp.src('src/content/images/**/*')
      .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
      .pipe(gulp.dest('dist/content/images'))
      .pipe(notify({ message: 'Images task complete' }));
});


/**
 * Copy all resources that are not TypeScript files into dist directory.
 */
gulp.task("resources", () => {
    return gulp.src(["src/**/*", "!**/*.ts", "!src/content/{scss,scss/**}"])
        .pipe(gulp.dest("dist"));
});


/**
 * Copy all required libraries into dist directory.
 */
gulp.task("libs", () => {
    return gulp.src([
            'es6-shim/es6-shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**',
            'material-design-lite/material.min.css',
            'material-design-lite/material.min.js',
            'tether/dist/js/tether.min.js',
            'bootstrap/dist/css/bootstrap.min.css',
            'bootstrap/dist/js/bootstrap.min.js',
        ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(gulp.dest("dist/vendor"));
});


/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('watch', function () {
    gulp.watch(["src/**/*.ts"], ['compile']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch(["src/**/*.html", "src/**/*.css"], ['resources']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
    gulp.watch(["src/**/*.scss", "src/**/*.css"], ['sass']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
});


/**
 * Build the project.
 */
gulp.task("build", ['compile', 'resources', 'libs', 'sass', 'css', 'images'], () => {
    console.log("Building the project ...");
});