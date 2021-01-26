import {async, TestBed} from '@angular/core/testing';
import {ExpenseService} from './expense.service';
import {ExpenseItem} from '../models/expense-item';
import {v4 as uuid} from 'uuid';
import {randomDate, randomInt} from '../../testcore/TestRandom';

describe('ExpenseService', () => {
  let expenseService: ExpenseService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [],
    }).compileComponents();

    expenseService = new ExpenseService();
    window.localStorage.clear();
  }));

  function randomExpenseItem(): ExpenseItem {
    return {
      id: randomInt(),
      name: uuid().toString(),
      description: uuid().toString(),
      expenseType: randomInt(),
      expenseDate: randomDate(),
      value: randomInt()
    };
  }

  describe('getItems()', () => {
    it('should return an empty array when uninitialised', () => {
      expect(expenseService.getItems()).toEqual([]);
    });

    it('should return the array in LocalStorage when initialised', () => {
      const expected = [randomExpenseItem(), randomExpenseItem(), randomExpenseItem()];
      window.localStorage.setItem('expense_service__16e12b75d9f6', JSON.stringify(expected));

      expect(expenseService.getItems()).toEqual(expected);
    });
  });

  describe('addItem()', () => {
    it('should raise an error when adding a falsy item', () => {
      expect(() => {
        expenseService.addItem(null);
      }).toThrow(new Error('Attempted to add an invalid ExpenseItem'));

      expect(() => {
        expenseService.addItem(undefined);
      }).toThrow(new Error('Attempted to add an invalid ExpenseItem'));
    });

    it('should add the items', () => {
      const firstItem = randomExpenseItem();
      expenseService.addItem(firstItem);
      expect(expenseService.getItems()).toEqual([firstItem]);

      const secondItem = randomExpenseItem();
      expenseService.addItem(secondItem);
      expect(expenseService.getItems()).toEqual([firstItem, secondItem]);
    });
  });

  describe('deleteItem()', () => {
    it('should raise an error when removing an item that does not exist', () => {
      const item = randomExpenseItem();
      expenseService.addItem(item);

      expect(() => {
        expenseService.deleteItem(item.id + 1);
      }).toThrow(new Error('Attempted to remove an ExpenseItem that does not exist'));
    });

    it('should remove the item', () => {
      const item = randomExpenseItem();
      expenseService.addItem(item);

      expect(expenseService.getItems()).toEqual([item]);
      expenseService.deleteItem(item.id);
      expect(expenseService.getItems()).toEqual([]);

      //
      expect(() => {
        expenseService.deleteItem(item.id);
      }).toThrow(new Error('Attempted to remove an ExpenseItem that does not exist'));
    });

    it('remove operation should not be idempotent', () => {
      const item = randomExpenseItem();
      expenseService.addItem(item);

      expenseService.deleteItem(item.id);
      expect(() => {
        expenseService.deleteItem(item.id);
      }).toThrow(new Error('Attempted to remove an ExpenseItem that does not exist'));
    });
  });
});
