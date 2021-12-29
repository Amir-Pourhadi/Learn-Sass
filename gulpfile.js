const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("index.scss").pipe(sass()).pipe(dest("css"));
}

function watchStyles() {
  return watch("index.scss", buildStyles);
}

exports.default = series(buildStyles, watchStyles);
