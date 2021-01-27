import {Component, OnInit} from '@angular/core';
import {ExpenseType} from '../enums/expense-types.enum';
import {EnumUtils} from '../utils/enum-utils';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
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
      name: new FormControl(null, Validators.minLength(1)),
      description: new FormControl(null, Validators.minLength(1)),
      expenseType: new FormControl(null, Validators.required),
      expenseDate: new FormControl(null, Validators.required),
      value: new FormControl(null, Validators.min(0)),
    });
  }

  onSubmit(form: FormGroupDirective): void {
    this.store.dispatch(ExpenseActions.submitForm(this.formGroup.value as ExpenseFormData));
    form.resetForm();
  }

  onReset(form: FormGroupDirective): void {
    this.store.dispatch(ExpenseActions.resetForm());
    form.resetForm();
  }
}
