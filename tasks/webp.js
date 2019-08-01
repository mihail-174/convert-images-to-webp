"use strict";

import gulp from "gulp";
import imageminWebp from "imagemin-webp";
import webp from "gulp-webp";
import debug from "gulp-debug";

// https://github.com/imagemin/imagemin-webp#imageminwebpoptions

gulp.task("webp", () => {
    return gulp.src(['img/**/*.png', 'img/**/*.jpg', 'img/**/*.jpeg'])
        .pipe(webp(imageminWebp({
            // lossless: true,
            // quality: 10,
            // alphaQuality: 10
        })))
        .pipe(gulp.dest('img'))
        .pipe(debug({
            "title": "Images"
        }));
});
