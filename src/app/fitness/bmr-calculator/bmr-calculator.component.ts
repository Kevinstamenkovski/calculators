import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-bmr-calculator',
  templateUrl: './bmr-calculator.component.html',
  styleUrls: ['./bmr-calculator.component.scss']
})
export class BMRCalculatorComponent implements OnInit {
  WeightFormControl: FormControl;
  HeightFormControl: FormControl;
  AgeFormControl: FormControl;
  public result: number = 0;
  public output: string = '';
  public maleS: boolean = false;
  public femaleS: boolean = false;
  constructor() {
    this.WeightFormControl = new FormControl(75);
    this.HeightFormControl = new FormControl(180);
    this.AgeFormControl = new FormControl( 20);
  }
  public maleSelected(): void{
    this.maleS = true;
    this.femaleS = false;
  }
  public femaleSelected(): void{
    this.maleS = false;
    this.femaleS = true;
  }
  public reset(): void{
    this.output = ''
    setTimeout(() => {
      this.WeightFormControl.setValue(75)
    }, 200)
    setTimeout(() => {
      this.HeightFormControl.setValue(180)
    }, 400)
    setTimeout(() => {
      this.AgeFormControl.setValue(20)
    }, 600)

  }

  public calculate(): void{
    if (this.maleS){
      this.result = (10 * this.WeightFormControl.value) + (6.25 * this.HeightFormControl.value) - (5 * this.AgeFormControl.value + 5);
      this.output = this.result + " Calories/Day ";
    }else if(this.femaleS){
      this.result = (10 * this.WeightFormControl.value) + (6.25 * this.HeightFormControl.value) - (5 * this.AgeFormControl.value - 161);
      this.output = this.result + " Calories/Day";
    }else{
      alert("Please Select A Gender")
    }

  }

  ngOnInit(): void {
  }

}
