import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-circle-calculator',
  templateUrl: './circle-calculator.component.html',
  styleUrls: ['./circle-calculator.component.scss']
})
export class CircleCalculatorComponent implements OnInit {
  radiusFormControl: FormControl;
  addDisplay: string = 'display: none;';
  perimeter: number = 0;
  area: number = 0;
  constructor() {
    this.radiusFormControl = new FormControl(0)
  }
  public calculate(): void{
    this.addDisplay = 'display: block;';
  }
  public reset(): void{
    window.location.reload();
  }
  ngOnInit(): void {
  }

}
