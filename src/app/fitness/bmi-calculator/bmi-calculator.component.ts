import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";


@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.scss']
})
export class BMICalculatorComponent implements OnInit {
  WeightFormControl: FormControl;
  HeightFormControl: FormControl;
  AgeFormControl: FormControl;
  public result: number = 0;
  public output: string = '';
  constructor() {
    this.WeightFormControl = new FormControl(0);
    this.HeightFormControl = new FormControl(0);
    this.AgeFormControl = new FormControl( 0);
  }
  public calculate(): void{
    this.result = parseFloat(this.WeightFormControl.value) / (Math.pow(parseFloat(this.HeightFormControl.value), 2) /10000);
    if(this.result < 16){
      this.output = this.result + " Severe Thinness";
    }else if(this.result < 17){
      this.output = this.result + " Moderate Thinness"
    }else if(this.result < 18.5){
      this.output = this.result + " Mild Thinness"
    }else if(this.result < 25){
      this.output = this.result + " Normal"
    }else if(this.result < 30){
      this.output = this.result + " Overweight"
    }else{
      this.output = this.result + " Obese"
    }
  }
  ngOnInit(): void {
  }

}
