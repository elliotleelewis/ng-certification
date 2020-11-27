import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HomeComponent, ForecastComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
