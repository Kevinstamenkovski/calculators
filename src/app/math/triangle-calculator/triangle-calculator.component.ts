import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
@Component({
  selector: 'app-triangle-calculator',
  templateUrl: './triangle-calculator.component.html',
  styleUrls: ['./triangle-calculator.component.scss']
})
export class TriangleCalculatorComponent implements OnInit {

  BaseFormControl: FormControl;
  SecondSideFormControl: FormControl;
  ThirdSideFormControl: FormControl;
  HeightFormControl: FormControl;
  perimeter: number = 0;
  area: number = 0;
  constructor() {
    this.BaseFormControl = new FormControl('');
    this.SecondSideFormControl = new FormControl('');
    this.ThirdSideFormControl = new FormControl('');
    this.HeightFormControl = new FormControl('');
  }
  public calculate(): void{
    this.perimeter = parseFloat(this.BaseFormControl.value) + parseFloat(this.SecondSideFormControl.value) + parseFloat(this.ThirdSideFormControl.value);
    this.area = parseFloat(this.BaseFormControl.value) * parseFloat(this.HeightFormControl.value) / 2;
  }
  ngOnInit(): void {

  }
}
