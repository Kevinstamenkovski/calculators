import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";


@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.scss']
})
export class BMICalculatorComponent implements OnInit {
  WeightFormControl: FormControl
  HeightFormControl: FormControl
  AgeFormControl: FormControl
  public result: number = 0
  public output: string = ''
  constructor() {
    this.WeightFormControl = new FormControl(0)
    this.HeightFormControl = new FormControl(0)
    this.AgeFormControl = new FormControl( 0)
  }
  public calculate(): void{
    if(this.WeightFormControl.value == 0 || this.HeightFormControl.value == 0 || this.WeightFormControl.value == null || this.HeightFormControl.value == null){
      alert("Fill All The Inputs")
    }else{
      this.result = (parseFloat(this.WeightFormControl.value) / (Math.pow(parseFloat(this.HeightFormControl.value), 2) /10000))
      if(this.result < 16){
        this.output = this.result.toFixed(1) + " Severe Thinness"
      }else if(this.result < 17){
        this.output = this.result.toFixed(1) + " Moderate Thinness"
      }else if(this.result < 18.5){
        this.output = this.result.toFixed(1) + " Mild Thinness"
      }else if(this.result < 25){
        this.output = this.result.toFixed(1) + " Normal"
      }else if(this.result < 30){
        this.output = this.result.toFixed(1) + " Overweight"
      }else{
        this.output = this.result.toFixed(1) + " Obese"
      }
    }

  }
  ngOnInit(): void {
  }

}
