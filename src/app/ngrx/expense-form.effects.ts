import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap} from 'rxjs/operators';
import {ExpenseService} from '../services/expense.service';
import {ExpenseActions} from './expense-form.actions';
import {serialize} from '../models/expense-item';

@Injectable()
export class ExpenseFormEffects {
  constructor(
    private actions$: Actions,
    private expenseService: ExpenseService,
  ) {
  }

  readonly createExpense$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ExpenseActions.submitForm),
      map(formData => {
        return {
          id: -1,
          name: formData.name,
          expenseDate: new Date(formData.expenseDate),
          description: formData.description,
          expenseType: formData.expenseType,
          value: formData.value
        };
      }),
      mergeMap(expenseItem => this.expenseService.addItem(expenseItem)),
      map(createdExpenseItem => ExpenseActions.expenseCreated(serialize(createdExpenseItem)))
    );
  });

  readonly deleteExpense$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ExpenseActions.deleteExpense),
      mergeMap(action => this.expenseService.deleteItem(action.expenseId)),
      map(deletedExpenseItem => ExpenseActions.expenseDeleted(serialize(deletedExpenseItem)))
    );
  });
}
