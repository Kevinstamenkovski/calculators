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
  public check(): void{
    if(this.radiusFormControl.value == ''){
      alert("Add The Radius")
    }else{
      this.calculate()
    }
  }
  public calculate(): void{
    this.addDisplay = 'visibility: visible;';
    this.diameter = 2 * parseFloat(this.radiusFormControl.value);
    this.perimeter = parseFloat((this.diameter * Math.PI).toFixed(1));
    this.area = parseFloat((Math.pow(parseFloat(this.radiusFormControl.value), 2) * Math.PI).toFixed(1))
  }

  public reset(): void{
    setTimeout(() => {
      this.radiusFormControl.setValue('')
    }, 300);
    this.addDisplay = 'visibility: hidden;';
  }
  ngOnInit(): void {
  }

}
