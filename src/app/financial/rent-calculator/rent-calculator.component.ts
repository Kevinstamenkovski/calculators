import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {PerfPhase} from "@angular/compiler-cli/src/ngtsc/perf";

@Component({
  selector: 'app-rent-calculator',
  templateUrl: './rent-calculator.component.html',
  styleUrls: ['./rent-calculator.component.scss']
})
export class RentCalculatorComponent implements OnInit {
  DebtFormControl: FormControl
  RentFormControl: FormControl
  emailFormControl: FormControl
  result: number = 0
  output: string = ''
  constructor() {
    this.RentFormControl = new FormControl('')
    this.DebtFormControl = new FormControl('')
    this.emailFormControl = new FormControl()
  }
  public reset(): void{
    setTimeout(() => {
      this.RentFormControl.setValue('')
    }, 200)
    setTimeout(() => {
      this.DebtFormControl.setValue('')
    }, 400)

  }
  public calculate(){
    this.RentFormControl.value.
    this.result = parseFloat(this.RentFormControl.value ) / 40
  }
  ngOnInit(): void {

  }

}
