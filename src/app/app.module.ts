import {BrowserModule} from '@angular/platform-browser';
import {ModuleWithProviders, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {ExpenseFormComponent} from './expense-form/expense-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {ExpenseTypeNamePipe} from './pipes/expense-type-name.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import {ExpenseFormEffects} from './ngrx/expense-form.effects';
import {ExpenseService} from './services/expense.service';
import {expenseFormReducer} from './ngrx/expense-form.reducer';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import {MatDividerModule} from '@angular/material/divider';

function excludeFromProd<T>(module: ModuleWithProviders<T>): T[] | ModuleWithProviders<T> {
  return environment.production ? [] : module;
}

@NgModule({
  declarations: [
    AppComponent,
    ExpenseFormComponent,
    ExpenseTypeNamePipe,
    ExpenseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      expenseStore: expenseFormReducer
    }, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictActionTypeUniqueness: true,
        strictActionWithinNgZone: true,
        strictStateImmutability: true,
        strictStateSerializability: true
      }
    }),
    EffectsModule.forRoot([ExpenseFormEffects]),
    excludeFromProd(StoreDevtoolsModule.instrument()),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDividerModule,
  ],
  providers: [ExpenseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
