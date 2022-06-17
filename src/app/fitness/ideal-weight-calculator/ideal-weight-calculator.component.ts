import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-ideal-weight-calculator',
  templateUrl: './ideal-weight-calculator.component.html',
  styleUrls: ['./ideal-weight-calculator.component.scss']
})
export class IdealWeightCalculatorComponent implements OnInit {
  HeightFormControl: FormControl;
  AgeFormControl: FormControl;
  public result: number = 0;
  public output: string = '';
  public maleS: boolean = true;
  public femaleS: boolean = false;
  constructor() {
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
      this.result = (50 + (.91 * (this.HeightFormControl.value - 152.4)));
    }else if(this.femaleS){
      this.result = (45.5 + (.91 * (this.HeightFormControl.value - 152.4)));
    }
    this.output = this.result.toFixed(1) + " Kg";
  }

  ngOnInit(): void {
  }

}
