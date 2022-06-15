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
  public addDisplay: string = '';
  constructor() {
    this.BaseFormControl = new FormControl(0);
    this.SecondSideFormControl = new FormControl(0);
    this.ThirdSideFormControl = new FormControl(0);
    this.HeightFormControl = new FormControl(0);
  }
  public calculate(): void{
    this.perimeter = parseFloat(this.BaseFormControl.value) + parseFloat(this.SecondSideFormControl.value) + parseFloat(this.ThirdSideFormControl.value);
    this.area = parseFloat(this.BaseFormControl.value) * parseFloat(this.HeightFormControl.value) / 2;
    this.addDisplay = 'display: block;';
  }
  ngOnInit(): void {}
}
