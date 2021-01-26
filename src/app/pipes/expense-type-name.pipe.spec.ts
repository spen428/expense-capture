import {ExpenseTypeNamePipe} from './expense-type-name.pipe';
import {ExpenseType} from '../enums/expense-types.enum';
import {EnumUtils} from '../utils/enum-utils';

describe('ExpenseTypeNamePipe', () => {
  let pipe: ExpenseTypeNamePipe;

  beforeEach(() => {
    pipe = new ExpenseTypeNamePipe();
  });

  it('should map some enums to their friendly names', () => {
    expect(pipe.transform(ExpenseType.PublicTransport)).toEqual('Public Transport');
    expect(pipe.transform(ExpenseType.Food)).toEqual('Food');
  });

  describe('should map all enum values to a non-null string', () => {
    EnumUtils.enumerate(ExpenseType).forEach((expenseType) => {
      it(`should map ${expenseType} to a non-null string`, () => {
        expect(pipe.transform(expenseType)).not.toBeNull();
      });
    });
  });

  it('should map an invalid input to null', () => {
    expect(pipe.transform(-1)).toBeNull();
    expect(pipe.transform(null)).toBeNull();
    expect(pipe.transform(undefined)).toBeNull();
  });
});
