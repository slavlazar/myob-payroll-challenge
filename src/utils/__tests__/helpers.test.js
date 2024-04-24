import {
  getFileExtension,
  generateInitialValuesFromSchema,
  isObjectEmpty,
  round,
  formatCurrency,
} from '../helpers';

describe('Utils: Helpers', () => {
  describe('getFileExtension', () => {
    it('should return the correct filename given a simple filename', () => {
      const file = '../assets/fonts/NeutroMYOB-Regular.woff2';
      const expected = 'woff2';

      expect(getFileExtension(file)).toEqual(expected);
    });

    it('stills returns the filename given a complex filename', () => {
      const file = '../assets/fonts/NeutroMYOB-Regular_test#1223.sub.woff2)';
      const expected = 'woff2';

      expect(getFileExtension(file)).toEqual(expected);
    });
  });

  describe('generateInitialValuesFromSchema', () => {
    it('should return the correct initialValues from schema keys', () => {
      const schemaKeys = ['username', 'password'];
      const expected = { username: '', password: '' };

      expect(generateInitialValuesFromSchema(schemaKeys)).toEqual(expected);
    });
  });

  describe('isObjectEmpty', () => {
    it('should return false as object is not empty', () => {
      const obj = { test: 'blah' };

      expect(isObjectEmpty(obj)).toBe(false);
    });

    it('should return true as object is empty', () => {
      const obj = {};

      expect(isObjectEmpty(obj)).toBe(true);
    });

    it('should return false for non objects', () => {
      const nonObj = '';

      expect(isObjectEmpty(nonObj)).toBe(false);
    });
  });

  describe('round', () => {
    it('rounds down to the nearest dollar', () => {
      const value = 60.49;
      const expected = 60;

      expect(round(value)).toEqual(expected);
    });

    it('rounds up to the nearest dollar', () => {
      const value = 60.501;
      const expected = 61;

      expect(round(value)).toEqual(expected);
    });
  });

  describe('formatCurrency', () => {
    it('formats a string value rounded and to correct currency', () => {
      const value = '2500.22';
      const expected = 'A$2,500.00';

      expect(formatCurrency(value)).toEqual(expected);
    });

    it('formats a string value without rounding and to correct currency', () => {
      const value = '2500.22';
      const expected = 'A$2,500.22';

      expect(formatCurrency(value, false)).toEqual(expected);
    });

    it('formats a number value rounded and to correct currency', () => {
      const value = 2500.22;
      const expected = 'A$2,500.00';

      expect(formatCurrency(value)).toEqual(expected);
    });
  });
});
