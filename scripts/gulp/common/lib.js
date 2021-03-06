/**
 * @name lib.js
 * @description libraries
 */
import gulp from 'gulp';
import shell from 'gulp-shell';

const execute = (command) => {
  return gulp.src('.').pipe(
    shell(command, {
      verbose: true,
      ignoreErrors: false
    })
  );
};

export { execute };
