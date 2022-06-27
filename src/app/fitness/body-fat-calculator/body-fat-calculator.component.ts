import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-body-fat-calculator',
  templateUrl: './body-fat-calculator.component.html',
  styleUrls: ['./body-fat-calculator.component.scss']
})
export class BodyFatCalculatorComponent implements OnInit {
  AgeFormControl: FormControl;
  WeightFormControl: FormControl;
  HeightFormControl: FormControl;
  femaleS: FormControl;
  maleS: FormControl;
  result: number = 0;
  output: string = '';
  bmiCalc: number = 0;
  constructor() {
    this.AgeFormControl = new FormControl(20);
    this.WeightFormControl = new FormControl(80);
    this.HeightFormControl = new FormControl(175);
    this.femaleS = new FormControl('');
    this.maleS = new FormControl('');
  }




  public reset(): void{
    setTimeout(() => {
      this.AgeFormControl.setValue(20)
    }, 200)
    setTimeout(() => {
      this.WeightFormControl.setValue(80)
    }, 400)
    setTimeout(() => {
      this.HeightFormControl.setValue(175)
    }, 600)
    this.output = ''
  }

  public calculate(): void{
    this.bmiCalc = parseFloat(this.WeightFormControl.value) / Math.pow(parseFloat(this.HeightFormControl.value), 2);
    this.result = (1.20 * this.bmiCalc) + (0.23 * parseFloat(this.AgeFormControl.value));
    this.output = "You are " + this.result.toFixed(0) + "% Fat";
  }
  ngOnInit(): void {

  }

}
