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
  result: number = 0
  output: string = ''
  constructor() {
    this.RentFormControl = new FormControl('')
    this.DebtFormControl = new FormControl('')
  }
  public calculate(): void{
    this.RentFormControl = this.RentFormControl
  }
  ngOnInit(): void {
  }

}
