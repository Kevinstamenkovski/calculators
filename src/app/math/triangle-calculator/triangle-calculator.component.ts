import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
@Component({
  selector: 'app-triangle-calculator',
  templateUrl: './triangle-calculator.component.html',
  styleUrls: ['./triangle-calculator.component.scss']
})
export class TriangleCalculatorComponent implements OnInit {

  BaseFormControl: FormControl
  SecondSideFormControl: FormControl
  ThirdSideFormControl: FormControl
  HeightFormControl: FormControl
  perimeter: number = 0
  area: number = 0
  public addDisplay: string = 'display: none;'
  public disInput: string = ''
  constructor() {
    this.BaseFormControl = new FormControl('')
    this.SecondSideFormControl = new FormControl('')
    this.ThirdSideFormControl = new FormControl('')
    this.HeightFormControl = new FormControl('')
  }

  public check(): void{
    {

    }
    if(this.BaseFormControl.value == '' || this.SecondSideFormControl.value == '' || this.ThirdSideFormControl.value == '' || this.HeightFormControl.value == ''){
      alert("You Have To Input Some Numbers")
    }else if(this.BaseFormControl.value < 0 || this.SecondSideFormControl.value < 0 || this.ThirdSideFormControl.value < 0 || this.HeightFormControl.value < 0){
      alert("don't put negative numbers")
      this.reset()
    }else {
      this.calculate()
    }
  }
  public calculate(): void{
    this.perimeter = parseFloat(this.BaseFormControl.value) + parseFloat(this.SecondSideFormControl.value) + parseFloat(this.ThirdSideFormControl.value)
    this.area = parseFloat(this.BaseFormControl.value) * parseFloat(this.HeightFormControl.value) / 2
    this.addDisplay = 'display: block;'
  }
  public reset(): void{
    this.addDisplay = 'display: none;'
    setTimeout(() => {
      this.BaseFormControl.setValue('')
    }, 200)
    setTimeout(() => {
      this.HeightFormControl.setValue('')
    }, 800)
    setTimeout(() => {
      this.ThirdSideFormControl.setValue('')
    }, 600)
    setTimeout(() => {
      this.SecondSideFormControl.setValue('')
    }, 400)
  }
  ngOnInit(): void {}
}
