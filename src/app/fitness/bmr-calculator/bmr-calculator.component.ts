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
  femaleSelected: FormControl;
  maleSelected: FormControl;
  public result: number = 0;
  public output: string = '';
  constructor() {
    this.WeightFormControl = new FormControl(0);
    this.HeightFormControl = new FormControl(0);
    this.AgeFormControl = new FormControl( 0);
    this.femaleSelected = new FormControl('');
    this.maleSelected = new FormControl('');
  }
  public calculate(): void{
    if(this.maleSelected){
      alert("GAY")
    }

  }
  ngOnInit(): void {
  }

}
