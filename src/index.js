import gulp from 'gulp';
import eslint from 'gulp-eslint';

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
    exitOnFail: true,
    options: {},
  },

  /**
   * Task help options
   * @type {Object}
   */
  help: {},

  /**
   * Task function
   * @param {object} config
   * @param {Function} end
   * @param {Function} error
   */
  fn(config, end, error) {
    const options = config.options || null;

    return lint()
      .pipe(eslint.results((results) => {
        if (results.errorCount > 0 && config.exitOnFail) {
          error();
        }
      }));

    function lint() {
      return gulp.src(config.src)
        .pipe(eslint(options))
        .pipe(eslint.format());
    }
  },
};
