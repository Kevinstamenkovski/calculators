import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TriangleCalculatorComponent} from "./math/triangle-calculator/triangle-calculator.component";
import {CircleCalculatorComponent} from "./math/circle-calculator/circle-calculator.component";
import {PercentageCalculatorComponent} from "./math/percentage-calculator/percentage-calculator.component";

const routes: Routes = [
  { path: 'triangle', component: TriangleCalculatorComponent},
  { path: 'circle', component: CircleCalculatorComponent},
  { path: 'percentage', component: PercentageCalculatorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const calculators = [
  TriangleCalculatorComponent,
  CircleCalculatorComponent,
  PercentageCalculatorComponent
]
