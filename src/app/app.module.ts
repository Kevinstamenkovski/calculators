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
import {MatSidenavModule} from '@angular/material/sidenav';
import { HeaderComponent } from './navigation/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from "@angular/material/radio";
import { MatCardModule} from '@angular/material/card';
import { MainPageComponent } from './main/main-page/main-page.component';
import { FinancialComponent } from './main/financial/financial.component';
import { MathComponent } from './main/math/math.component';
import { FitnessComponent } from './main/fitness/fitness.component';

@NgModule({
  declarations: [
    AppComponent,
    calculators,
    HeaderComponent,
    MainPageComponent,
    FinancialComponent,
    MathComponent,
    FitnessComponent,
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
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatRadioModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
