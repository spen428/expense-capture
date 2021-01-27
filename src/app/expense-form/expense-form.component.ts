import {Component, OnInit} from '@angular/core';
import {ExpenseType} from '../enums/expense-types.enum';
import {EnumUtils} from '../utils/enum-utils';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {FormControl, FormGroup, FormGroupDirective} from '@angular/forms';
import {ExpenseState} from '../ngrx/expense-form.reducer';
import {ExpenseActions} from '../ngrx/expense-form.actions';
import {ExpenseFormSelector} from '../ngrx/expense-form.selector';
import {ExpenseFormData} from '../models/expense-form-data';
import {ExpenseItem} from '../models/expense-item';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent implements OnInit {
  public readonly expenseTypes: number[] = EnumUtils.enumerate(ExpenseType);
  public formGroup: FormGroup;
  public allExpenses$: Observable<ExpenseItem[]>;

  constructor(private store: Store<ExpenseState>) {
    this.allExpenses$ = store.select(ExpenseFormSelector.getAllExpenses);
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      expenseType: new FormControl(),
      expenseDate: new FormControl(new Date().toISOString()),
      value: new FormControl(),
    });
  }

  onSubmit(form: FormGroupDirective): void {
    this.store.dispatch(ExpenseActions.submitForm(this.formGroup.value as ExpenseFormData));
    form.resetForm();
  }

  onReset(): void {
    this.store.dispatch(ExpenseActions.resetForm());
  }

  onDelete(id: number): void {
    this.store.dispatch(ExpenseActions.deleteExpense({expenseId: id}));
  }
}
