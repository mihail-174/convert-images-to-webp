"use strict";

import gulp from "gulp";

require('require-dir')('tasks', {
  recurse: true
});

export const development = gulp.series(
    gulp.parallel("webp")
);

export default development;
