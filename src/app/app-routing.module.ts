import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TriangleCalculatorComponent} from "./math/triangle-calculator/triangle-calculator.component";
import {CircleCalculatorComponent} from "./math/circle-calculator/circle-calculator.component";
import {PercentageCalculatorComponent} from "./math/percentage-calculator/percentage-calculator.component";
import {BMICalculatorComponent} from "./fitness/bmi-calculator/bmi-calculator.component";
import {BMRCalculatorComponent} from "./fitness/bmr-calculator/bmr-calculator.component";
import {BodyFatCalculatorComponent} from "./fitness/body-fat-calculator/body-fat-calculator.component";
import {IdealWeightCalculatorComponent} from "./fitness/ideal-weight-calculator/ideal-weight-calculator.component";
import {RentCalculatorComponent} from "./financial/rent-calculator/rent-calculator.component";
import {AutoLeaseCalculatorComponent} from "./financial/auto-lease-calculator/auto-lease-calculator.component";
import {MainPageComponent} from "./main/main-page/main-page.component";
import {FitnessComponent} from "./main/fitness/fitness.component";
import {MathComponent} from "./main/math/math.component";
import {FinancialComponent} from "./main/financial/financial.component";

const routes: Routes = [
  { path: 'triangle', component: TriangleCalculatorComponent},
  { path: 'circle', component: CircleCalculatorComponent},
  { path: 'percentage', component: PercentageCalculatorComponent},
  { path: 'bmi', component: BMICalculatorComponent},
  { path: 'bmr', component: BMRCalculatorComponent},
  { path: 'body-fat', component: BodyFatCalculatorComponent},
  { path: 'ideal-weight', component: IdealWeightCalculatorComponent},
  { path: 'rent', component: RentCalculatorComponent},
  { path: "auto-lease", component: AutoLeaseCalculatorComponent},
  { path: 'main', component: MainPageComponent},
  { path: 'main-fitness', component: FitnessComponent},
  { path: 'main-math', component: MathComponent},
  { path: 'main-financial', component: FinancialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const calculators = [
  TriangleCalculatorComponent,
  CircleCalculatorComponent,
  PercentageCalculatorComponent,
  BMICalculatorComponent,
  BMRCalculatorComponent,
  BodyFatCalculatorComponent,
  IdealWeightCalculatorComponent,
  RentCalculatorComponent,
  AutoLeaseCalculatorComponent,
  MainPageComponent
]
