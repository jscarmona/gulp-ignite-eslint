import gulp from 'gulp';
import eslint from 'gulp-eslint';
import path from 'path';
import yargs from 'yargs';
import { IGNITE_UTILS } from 'gulp-ignite/utils';

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
    src: ['./client/app/**/*.js'],
    options: {},
    watch: false,
    watchFiles: [],
  },

  /**
   * Task help options
   * @type {Object}
   */
  help: {
    'watch, -w': 'Watch files for changes and trigger itself',
  },

  /**
   * Task function
   * @param {object} config
   * @param {Function} end
   * @param {Function} error
   */
  fn(config, end, error) {
    const options = config.options || null;
    const watch = yargs.argv.watch || yargs.argv.w || config.watch;
    const watchFiles = config.watchFiles.length ? config.watchFiles : config.src;

    if (watch) {
      gulp.watch(watchFiles, (file) => {
        const startTime = IGNITE_UTILS.startTime();

        IGNITE_UTILS.log(`eslint => ${path.basename(file.path)}`);

        lint()
          .pipe(eslint.results((results) => {
            IGNITE_UTILS.notify(`eslint complete --- ${IGNITE_UTILS.getDuration(startTime)}`, results.errorCount === 0);
          }));
      });
    }

    lint()
      .pipe(eslint.results((results) => {
        if (results.errorCount > 0) {
          error();

          return;
        }

        end();
      }));

    function lint() {
      return gulp.src(config.src)
        .pipe(eslint(options))
        .pipe(eslint.format());
    }
  },
};
