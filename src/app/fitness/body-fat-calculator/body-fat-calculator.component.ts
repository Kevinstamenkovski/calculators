import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-body-fat-calculator',
  templateUrl: './body-fat-calculator.component.html',
  styleUrls: ['./body-fat-calculator.component.scss']
})
export class BodyFatCalculatorComponent implements OnInit {
  AgeFormControl: FormControl;
  WeightFormControl: FormControl;
  HeightFormControl: FormControl;
  NeckFormControl: FormControl;
  WaistFormControl: FormControl;
  constructor() {
    this.AgeFormControl = new FormControl('');
    this.WeightFormControl = new FormControl('');
    this.HeightFormControl = new FormControl('');
    this.NeckFormControl = new FormControl('');
    this.WaistFormControl = new FormControl('');
  }
  ngOnInit(): void {
  }

}
