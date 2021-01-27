import {ExpenseType} from '../enums/expense-types.enum';

export class ExpenseFormData {
  name: string;
  description: string;
  expenseType: ExpenseType;
  expenseDate: Date;
  value: number;
}

export class SerializableExpenseFormData {
  name: string;
  description: string;
  expenseType: number;
  expenseDate: string;
  value: number;
}

export function serialize(formData: ExpenseFormData): SerializableExpenseFormData {
  return {
    name: formData.name,
    description: formData.description,
    expenseType: formData.expenseType,
    expenseDate: formData.expenseDate.toISOString(),
    value: formData.value,
  };
}
