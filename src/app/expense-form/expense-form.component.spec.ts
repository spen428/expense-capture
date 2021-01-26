import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ExpenseFormComponent} from './expense-form.component';
import {By} from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DebugElement} from '@angular/core';
import {DateAdapter} from '@angular/material/core';
import {ExpenseTypeNamePipe} from '../pipes/expense-type-name.pipe';

describe('ExpenseFormComponent', () => {
  let component: ExpenseFormComponent;
  let fixture: ComponentFixture<ExpenseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExpenseFormComponent,
        ExpenseTypeNamePipe
      ],
      imports: [
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule
      ],
      providers: [DateAdapter]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should render all form fields', () => {
    const formFieldNameList = [
      'Expense Name',
      'Expense Description',
      'Expense Type',
      'Expense Date',
      'Monetary Value',
    ];

    formFieldNameList.forEach((name) => {
      it(`should render the ${name} field`, () => {
        const formFields = fixture.debugElement.queryAll(By.css('mat-form-field'));

        const field = formFields.find(x => {
          const label = x.query(By.css('mat-label'));
          return label.nativeElement.innerText === name;
        });

        expect(field).toBeTruthy();
      });
    });
  });

  function findButtonByLabel(label: string): DebugElement {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    return buttons.find(x => x.nativeElement.innerText === label);
  }

  it(`should render the submit button`, () => {
    const button = findButtonByLabel('Submit');
    expect(button).toBeTruthy();
    expect(button.nativeElement.hasAttribute('mat-raised-button')).toBeTrue();
    expect(button.nativeElement.getAttribute('color')).toEqual('primary');
  });

  it(`should render the reset button`, () => {
    const button = findButtonByLabel('Reset');
    expect(button).toBeTruthy();
    expect(button.nativeElement.hasAttribute('mat-button')).toBeTrue();
    expect(button.nativeElement.getAttribute('color')).toEqual('warn');
  });
});
