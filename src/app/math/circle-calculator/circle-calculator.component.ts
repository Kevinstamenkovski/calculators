import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-circle-calculator',
  templateUrl: './circle-calculator.component.html',
  styleUrls: ['./circle-calculator.component.scss']
})
export class CircleCalculatorComponent implements OnInit {
  radiusFormControl: FormControl;
  addDisplay: string = 'visibility: hidden;';
  perimeter: number = 0;
  area: number = 0;
  diameter: number = 0;
  constructor() {
    this.radiusFormControl = new FormControl('');
  }
  public calculate(): void{
    this.addDisplay = 'visibility: visible;';
    this.diameter = 2 * parseFloat(this.radiusFormControl.value);
    this.perimeter = this.diameter * Math.PI;
    this.area = Math.pow(parseFloat(this.radiusFormControl.value), 2) * Math.PI;
  }

  public reset(): void{
    window.location.reload();
  }
  ngOnInit(): void {
  }

}
