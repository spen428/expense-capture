import {createReducer, on} from '@ngrx/store';
import {SerializableExpenseItem} from '../models/expense-item';
import {ExpenseActions} from './expense-form.actions';

export interface ExpenseState {
  expenses: SerializableExpenseItem[];
}

export const expenseFormReducer = createReducer({expenses: []},
  on(ExpenseActions.expenseCreated,
    (state, expenseItem) => {
      return {...state, expenses: [...state.expenses, expenseItem]};
    }
  ),
  on(ExpenseActions.expenseDeleted,
    (state, expenseItem) => {
      return {...state, expenses: state.expenses.filter(x => x.id !== expenseItem.id)};
    }
  )
);
