import {Component, OnInit} from '@angular/core';
import {ExpenseType} from '../enums/expense-types.enum';
import {EnumUtils} from '../utils/enum-utils';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent implements OnInit {
  public readonly expenseTypes: number[] = EnumUtils.enumerate(ExpenseType);

  constructor() {
  }

  ngOnInit(): void {
  }
}
