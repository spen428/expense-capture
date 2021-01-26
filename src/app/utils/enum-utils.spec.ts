import {EnumUtils} from './enum-utils';

enum TestEnum {
  VALUE_ONE,
  VALUE_TWO = 3,
  VALUE_THREE,
}

describe('EnumUtils', () => {
  describe('enumerate()', () => {
    it('should enumerate all three values of TestEnum', () => {
      const expected = [
        TestEnum.VALUE_ONE,
        TestEnum.VALUE_TWO,
        TestEnum.VALUE_THREE
      ];

      expect(EnumUtils.enumerate(TestEnum)).toEqual(expected);
    });

    it('should only return integers', () => {
      EnumUtils.enumerate(TestEnum).forEach((value => {
        expect(typeof value).toEqual('number');
      }));
    });
  });

  describe('enumerateNames()', () => {
    it('should enumerate all three values of TestEnum', () => {
      const expected = [
        'VALUE_ONE',
        'VALUE_TWO',
        'VALUE_THREE'
      ];

      expect(EnumUtils.enumerateNames(TestEnum)).toEqual(expected);
    });

    it('should only return strings', () => {
      EnumUtils.enumerateNames(TestEnum).forEach((value => {
        expect(typeof value).toEqual('string');
      }));
    });
  });
});
