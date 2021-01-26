import {Component, OnInit} from '@angular/core';
import {ExpenseType} from '../enums/expense-types.enum';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent implements OnInit {
  public readonly expenseTypes: number[] = Object.keys(ExpenseType).filter(x => !isNaN(Number(x))).map(x => Number(x));

  constructor() {
  }

  ngOnInit(): void {
  }

  public nameOf(n: number): string {
    return Object.keys(ExpenseType).filter(x => isNaN(Number(x)))[n];
  }
}
