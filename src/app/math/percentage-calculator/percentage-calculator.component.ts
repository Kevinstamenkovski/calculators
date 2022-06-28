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
    this.PercentFormControl = new FormControl('');
    this.IntNumberFormControl = new FormControl('');
    this.ResultFormControl = new FormControl('');
  }
  public calculate(): void{

    if(this.IntNumberFormControl.value != '' && this.PercentFormControl.value != '' && this.ResultFormControl.value == ''){
      this.result = parseFloat(this.IntNumberFormControl.value) / 100 * parseFloat(this.PercentFormControl.value);
      this.finalResult = this.PercentFormControl.value.toFixed(1) + "% OF " + this.IntNumberFormControl.value.toFixed(1) + " IS " + this.result.toFixed(1);
    }else if(this.IntNumberFormControl.value != '' && this.ResultFormControl.value != '' && this.PercentFormControl.value == ''){
      this.result = parseFloat(this.IntNumberFormControl.value) / parseFloat(this.ResultFormControl.value) * 100;
      this.finalResult = "The % OF " + this.IntNumberFormControl.value.toFixed(1) + " OF " + this.ResultFormControl.value.toFixed(1) + " IS " + this.result.toFixed(1) + "%";
    }else if(this.ResultFormControl.value != '' && this.PercentFormControl.value != '' && this.IntNumberFormControl.value == ''){
      this.result = parseFloat(this.ResultFormControl.value) / parseFloat(this.PercentFormControl.value) * 100;
      this.finalResult = this.ResultFormControl.value.toFixed(1) + " IS THE " + this.PercentFormControl.value.toFixed(1) + "% OF " + this.result.toFixed(1);
    }else if(this.IntNumberFormControl.value !== '' && this.PercentFormControl.value !== '' && this.ResultFormControl.value !== ''){
      alert("Too Many Inputs")
      this.reset()
    }else{
      alert("You Need At Least 2 Inputs")
      this.reset()
    }
    this.addDisplay = 'display: block;'
  }
  public reset(): void{
    this.addDisplay = 'display: none;'
    setTimeout(() => {
      this.PercentFormControl.setValue('')
    }, 200)
    setTimeout(() => {
      this.IntNumberFormControl.setValue('')
    }, 400)
    setTimeout(() => {
      this.ResultFormControl.setValue('')
    }, 600)
  }

  ngOnInit(): void {

  }
}
