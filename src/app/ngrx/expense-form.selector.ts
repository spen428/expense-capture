import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ExpenseState} from './expense-form.reducer';
import {deserialize} from '../models/expense-item';

const expenseFeature = createFeatureSelector<ExpenseState>('expenseStore');

export class ExpenseFormSelector {
  public static readonly getAllExpenses = createSelector(expenseFeature, state => {
    return state.expenses.map(deserialize);
  });
}
