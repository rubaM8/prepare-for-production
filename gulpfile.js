import gulp from "gulp";
import shell from "gulp-shell";

//build
gulp.task("build", shell.task("parcel build"));
gulp.task("start", shell.task("parcel index.html"));
gulp.task("default", gulp.series("build", "start"));

//tests
//unit tests
gulp.task("test", shell.task("mocha"));

//end-to-end tests
gulp.task("end-to-end test", shell.task("npx cypress run"));
