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
  public maleS: boolean = true;
  public femaleS: boolean = false;
  constructor() {
    this.WeightFormControl = new FormControl(0);
    this.HeightFormControl = new FormControl(0);
    this.AgeFormControl = new FormControl( 0);
  }
  public maleSelected(): void{
    this.maleS = true;
    this.femaleS = false;
  }
  public femaleSelected(): void{
    this.maleS = false;
    this.femaleS = true;
  }
  public calculate(): void{
    if (this.maleS){
      this.result = (10 * this.WeightFormControl.value) + (6.25 * this.HeightFormControl.value) - (5 * this.AgeFormControl.value + 5);
    }else if(this.femaleS){
      this.result = (10 * this.WeightFormControl.value) + (6.25 * this.HeightFormControl.value) - (5 * this.AgeFormControl.value - 161);
    }
    this.output = this.result + " Calories/Day";
  }

  ngOnInit(): void {
  }

}
