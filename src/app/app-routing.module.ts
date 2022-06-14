import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TriangleCalculatorComponent} from "./math/triangle-calculator/triangle-calculator.component";

const routes: Routes = [
  {
    path: "triangle",
    component: TriangleCalculatorComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
