import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoLeaseCalculatorComponent } from './auto-lease-calculator.component';

describe('AutoLeaseCalculatorComponent', () => {
  let component: AutoLeaseCalculatorComponent;
  let fixture: ComponentFixture<AutoLeaseCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoLeaseCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoLeaseCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
