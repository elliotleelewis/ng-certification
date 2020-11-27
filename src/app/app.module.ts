import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HomeComponent } from './home/home.component';

const ROUTES: Routes = [
  { path: 'forecast/:zipcode', component: ForecastComponent },
  { path: '', pathMatch: 'full', component: HomeComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
  ],
  declarations: [AppComponent, HomeComponent, ForecastComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
