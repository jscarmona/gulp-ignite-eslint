import chai from 'chai';
import task from '../src';

const expect = chai.expect;

describe('ESLint Task', () => {
  describe('#name', () => {
    it('should be a string', () => {
      expect(task.name).to.be.a('string');
    });

    it('should be `eslint`', () => {
      expect(task.name).to.equal('eslint');
    });
  });

  describe('#description', () => {
    it('should be a string', () => {
      expect(task.description).to.be.a('string');
    });
  });

  describe('#config', () => {
    it('should be an object', () => {
      expect(task.config).to.be.a('object');
    });

    it('should contain a `src` property', () => {
      expect(task.config.src).to.be.a('array');
    });

    it('should contain a `options` property', () => {
      expect(task.config.options).to.be.a('object');
    });

    it('should contain a `watch` property', () => {
      expect(task.config.watch).to.be.a('boolean');
      expect(task.config.watch).to.be.false;
    });

    it('should contain a `watchFiles` property', () => {
      expect(task.config.watchFiles).to.be.a('array');
    });
  });

  describe('#help', () => {
    it('should be an object', () => {
      expect(task.help).to.be.a('object');
    });

    it('should contain a `watch` property', () => {
      expect(task.help.watch).to.be.a('string');
    });
  });

  describe('#fn', () => {
    it('should be a function', () => {
      expect(task.fn).to.be.a('function');
    });
  });
});
