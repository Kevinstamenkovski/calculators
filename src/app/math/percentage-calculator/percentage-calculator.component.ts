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
  public addDisplay: string = 'display: none;';
  result: number = 0;
  constructor() {
    this.PercentFormControl = new FormControl('');
    this.IntNumberFormControl = new FormControl('');
  }
  public calculate(): void{
    this.result = parseFloat(this.IntNumberFormControl.value) / 100 * parseFloat(this.PercentFormControl.value);
    this.addDisplay = 'display: block;'
  }

  ngOnInit(): void {
  }

}
