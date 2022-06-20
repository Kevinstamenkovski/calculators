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
    this.AgeFormControl = new FormControl('');
    this.WeightFormControl = new FormControl('');
    this.HeightFormControl = new FormControl('');
    this.femaleS = new FormControl('');
    this.maleS = new FormControl('');
  }



  public maleSelect(): void{
    this.bmiCalc = parseFloat(this.WeightFormControl.value) / Math.pow(parseFloat(this.HeightFormControl.value), 2);
    this.result = (1.20 * this.bmiCalc) + (0.23 * parseFloat(this.AgeFormControl.value)) - 16.2;
  }
  public femaleSelect(): void{
    this.bmiCalc = parseFloat(this.WeightFormControl.value) / Math.pow(parseFloat(this.HeightFormControl.value), 2);
    this.result = (1.20 * this.bmiCalc) + (0.23 * parseFloat(this.AgeFormControl.value)) - 5.4;
  }
  public calculate(): void{
    this.output = "You are " + this.result.toFixed(0) + "% Fat";

  }
  ngOnInit(): void {

  }

}
