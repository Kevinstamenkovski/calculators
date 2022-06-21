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
  public addDisplay: string = 'display: none;';
  public disInput: string = '';
  constructor() {
    this.BaseFormControl = new FormControl('');
    this.SecondSideFormControl = new FormControl('');
    this.ThirdSideFormControl = new FormControl('');
    this.HeightFormControl = new FormControl('');
  }

  public check(): void{
    if(this.BaseFormControl.value == '' || this.SecondSideFormControl.value == '' || this.ThirdSideFormControl.value == ''){
      alert("null")
    }
    else{
      this.calculate()
    }
  }
  public calculate(): void{
    this.perimeter = parseFloat(this.BaseFormControl.value) + parseFloat(this.SecondSideFormControl.value) + parseFloat(this.ThirdSideFormControl.value);
    this.area = parseFloat(this.BaseFormControl.value) * parseFloat(this.HeightFormControl.value) / 2;
    this.addDisplay = 'display: block;'
  }
  public reset(): void{
    this.addDisplay = 'display: none;'
  }
  ngOnInit(): void {}
}
