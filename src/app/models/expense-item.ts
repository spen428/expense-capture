import {ExpenseType} from '../enums/expense-types.enum';

export class ExpenseItem {
  id: number;
  name: string;
  description: string;
  expenseType: ExpenseType;
  expenseDate: Date;
  value: number;
}

// Sigh
export class SerializableExpenseItem {
  id: number;
  name: string;
  description: string;
  expenseType: number;
  expenseDate: string;
  value: number;
}

export function serialize(item: ExpenseItem): SerializableExpenseItem {
  return {
    id: item.id,
    name: item.name,
    description: item.description,
    expenseType: item.expenseType,
    expenseDate: item.expenseDate.toISOString(),
    value: item.value
  };
}

export function deserialize(item: SerializableExpenseItem): ExpenseItem {
  return {
    id: item.id,
    name: item.name,
    description: item.description,
    expenseType: item.expenseType as ExpenseType,
    expenseDate: new Date(item.expenseDate),
    value: item.value
  };
}
