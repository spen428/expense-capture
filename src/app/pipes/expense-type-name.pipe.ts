import {Pipe, PipeTransform} from '@angular/core';
import {ExpenseType} from '../enums/expense-types.enum';

@Pipe({name: 'expenseTypeName'})
export class ExpenseTypeNamePipe implements PipeTransform {
  transform(value: ExpenseType): string {
    switch (value) {
      case ExpenseType.PublicTransport:
        return 'Public Transport';
      case ExpenseType.Food:
        return 'Food';
      case ExpenseType.Accommodation:
        return 'Accommodation';
      case ExpenseType.Mileage:
        return 'Mileage';
    }

    return null;
  }
}
