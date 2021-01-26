import {Injectable} from '@angular/core';
import {ExpenseItem} from '../models/expense-item';

@Injectable()
export class ExpenseService {
  constructor() {
  }

  private readonly localStorageKey = 'expense_service__16e12b75d9f6';

  getItems(): ExpenseItem[] {
    const jsonBlob = window.localStorage.getItem(this.localStorageKey);
    if (!jsonBlob) {
      return [];
    }

    const itemList = JSON.parse(jsonBlob) as ExpenseItem[];
    for (const item of itemList) {
      item.expenseDate = new Date(item.expenseDate);
    }
    return itemList;
  }

  addItem(item: ExpenseItem): void {
    if (!item) {
      throw new Error('Attempted to add an invalid ExpenseItem');
    }

    const itemList = this.getItems();
    itemList.push(item);

    this.writeToLocalStorage(itemList);
  }

  deleteItem(itemId: number): ExpenseItem {
    const itemList = this.getItems();

    const indexToRemove = itemList.findIndex(x => x.id === itemId);
    if (indexToRemove < 0) {
      throw new Error('Attempted to remove an ExpenseItem that does not exist');
    }

    const removedItem = itemList.splice(indexToRemove, 1)[0];
    this.writeToLocalStorage(itemList);
    return removedItem;
  }

  private writeToLocalStorage(itemList: ExpenseItem[]): void {
    window.localStorage.setItem(this.localStorageKey, JSON.stringify(itemList));
  }
}
