import {Component, OnInit} from '@angular/core';
import {ExpenseActions} from '../ngrx/expense-form.actions';
import {Store} from '@ngrx/store';
import {ExpenseState} from '../ngrx/expense-form.reducer';
import {ExpenseFormSelector} from '../ngrx/expense-form.selector';
import {Observable} from 'rxjs';
import {ExpenseItem} from '../models/expense-item';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {
  public allExpenses$: Observable<ExpenseItem[]>;

  constructor(private store: Store<ExpenseState>) {
    this.allExpenses$ = store.select(ExpenseFormSelector.getAllExpenses);
  }

  ngOnInit(): void {
    this.store.dispatch(ExpenseActions.loadExpenses());
  }

  onDelete(id: number): void {
    this.store.dispatch(ExpenseActions.deleteExpense({expenseId: id}));
  }
}
