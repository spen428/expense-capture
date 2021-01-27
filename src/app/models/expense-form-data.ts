import {ExpenseType} from '../enums/expense-types.enum';

export class ExpenseFormData {
  name: string;
  description: string;
  expenseType: ExpenseType;
  expenseDate: string;
  value: number;
}
