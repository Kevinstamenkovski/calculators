import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { calculators } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MatMenuModule} from "@angular/material/menu";
import { BMICalculatorComponent } from './fitness/bmi-calculator/bmi-calculator.component';
import { BMRCalculatorComponent } from './fitness/bmr-calculator/bmr-calculator.component';
import { IdealWeightCalculatorComponent } from './fitness/ideal-weight-calculator/ideal-weight-calculator.component';
import { BodyFatCalculatorComponent } from './fitness/body-fat-calculator/body-fat-calculator.component';


@NgModule({
  declarations: [
    AppComponent,
    calculators,
    BMICalculatorComponent,
    BMRCalculatorComponent,
    IdealWeightCalculatorComponent,
    BodyFatCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
