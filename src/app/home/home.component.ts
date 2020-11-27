import { Component, OnInit } from '@angular/core';
import { SubSink } from 'subsink';

import { Condition } from '../enums';
import { WeatherReport } from '../models';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  locations: string[] = [];
  addLocationFormData = {
    zipcode: '',
  };
  weatherReports: WeatherReport[] = [
    {
      locationName: 'Rancho Cordova',
      zipcode: '95742',
      currentCondition: Condition.sun,
      temp: 58,
      maxTemp: 65,
      minTemp: 48,
    },
  ];

  private subsink = new SubSink();

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.subsink.sink = this.locationService.location$.subscribe(
      (locations) => (this.locations = locations),
    );
  }

  addLocation(): void {
    this.locationService.addLocation(this.addLocationFormData.zipcode);
  }
}
