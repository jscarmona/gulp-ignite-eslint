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
  });

  describe('#help', () => {
    it('should be an object', () => {
      expect(task.help).to.be.a('object');
    });
  });

  describe('#fn', () => {
    it('should be a function', () => {
      expect(task.fn).to.be.a('function');
    });
  });
});
