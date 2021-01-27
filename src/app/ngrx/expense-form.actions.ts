import {createAction, props} from '@ngrx/store';
import {SerializableExpenseItem} from '../models/expense-item';
import {ExpenseFormData} from '../models/expense-form-data';

export class ExpenseActions {
  public static readonly loadExpenses = createAction('[ExpenseForm] Load Expenses');
  public static readonly resetForm = createAction('[ExpenseForm] Reset');
  public static readonly submitForm = createAction('[ExpenseForm] Submit', props<ExpenseFormData>());
  public static readonly deleteExpense = createAction('[ExpenseForm] Delete', props<{ expenseId: number }>());

  public static readonly expenseCreated = createAction('[ExpenseEffects] Expense Created', props<SerializableExpenseItem>());
  public static readonly expenseDeleted = createAction('[ExpenseEffects] Expense Deleted', props<SerializableExpenseItem>());
  public static readonly expensesLoaded = createAction('[ExpenseEffects] Expenses Loaded',
    props<{ expenses: SerializableExpenseItem[] }>());
}
