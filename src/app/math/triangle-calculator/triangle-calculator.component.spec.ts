import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangleCalculatorComponent } from './triangle-calculator.component';

describe('TriangleCalculatorComponent', () => {
  let component: TriangleCalculatorComponent;
  let fixture: ComponentFixture<TriangleCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriangleCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriangleCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
