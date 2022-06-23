import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-percentage-calculator',
  templateUrl: './percentage-calculator.component.html',
  styleUrls: ['./percentage-calculator.component.scss']
})
export class PercentageCalculatorComponent implements OnInit {
  PercentFormControl: FormControl;
  IntNumberFormControl: FormControl;
  ResultFormControl: FormControl;
  public addDisplay: string = 'display: none;';
  result: number = 0;
  finalResult: string = '';
  constructor() {
    this.PercentFormControl = new FormControl(0);
    this.IntNumberFormControl = new FormControl(0);
    this.ResultFormControl = new FormControl(0);
  }
  public calculate(): void{

    if(this.IntNumberFormControl.value != 0 && this.PercentFormControl.value != 0 && this.ResultFormControl.value == 0){
      this.result = parseFloat(this.IntNumberFormControl.value) / 100 * parseFloat(this.PercentFormControl.value);
      this.finalResult = this.PercentFormControl.value + "% OF " + this.IntNumberFormControl.value + " IS " + this.result;
    }else if(this.IntNumberFormControl.value != 0 && this.ResultFormControl.value != 0 && this.PercentFormControl.value == 0){
      this.result = parseFloat(this.IntNumberFormControl.value) / parseFloat(this.ResultFormControl.value) * 100;
      this.finalResult = "The % OF " + this.IntNumberFormControl.value + " OF " + this.ResultFormControl.value + " IS " + this.result + "%";
    }else if(this.ResultFormControl.value != 0 && this.PercentFormControl.value != 0 && this.IntNumberFormControl.value == 0){
      this.result = parseFloat(this.ResultFormControl.value) / parseFloat(this.PercentFormControl.value) * 100;
      this.finalResult = this.ResultFormControl.value + " IS THE " + this.PercentFormControl.value + "% OF " + this.result;
    }else{
      alert("You Must Input At least 2 Values")
    }

   this.addDisplay = 'display: block;'
  }
  public reset(): void{
    window.location.reload()
  }
  ngOnInit(): void {
  }

}
