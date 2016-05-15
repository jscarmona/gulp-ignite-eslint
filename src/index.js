import gulp from 'gulp';
import eslint from 'gulp-eslint';
import yargs from 'yargs';

export default {
  /**
   * Task name
   * @type {String}
   */
  name: 'eslint',

  /**
   * Task description
   * @type {String}
   */
  description: 'Runs eslint on your js files',

  /**
   * Task default configuration
   * @type {Object}
   */
  config: {
    src: ['./**/*.js', '!./node_modules/**'],
    options: {},
    watch: false,
    watchFiles: [],
  },

  /**
   * Task help options
   * @type {Object}
   */
  help: {
    watch: 'Watch files for changes and trigger itself',
  },

  /**
   * Task function
   * @param {object} config
   * @param {Function} end
   * @param {Function} error
   */
  fn(config, end, error) {
    const options = config.options || null;
    const watch = yargs.argv.watch || config.watch;
    const watchFiles = config.watchFiles.length ? config.watchFiles : config.src;

    if (watch) {
      gulp.watch(watchFiles, ['eslint']);
    }

    gulp.src(config.src)
      .pipe(eslint(options))
      .pipe(eslint.format())
      .pipe(eslint.results((results) => {
        if (results.errorCount > 0) {
          error();

          return;
        }

        end();
      }));
  },
};
