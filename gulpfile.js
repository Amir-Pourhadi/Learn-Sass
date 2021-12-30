const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

function buildStyles() {
  return src("styles/**/*.scss")
    .pipe(sass())
    .pipe(purgecss({ content: ["*.html"] }))
    .pipe(dest("css"));
}

function watchStyles() {
  return watch(["styles/**/*.scss", "*.html"], buildStyles);
}

exports.default = series(buildStyles, watchStyles);
