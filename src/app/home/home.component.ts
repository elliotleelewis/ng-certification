import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SubSink } from 'subsink';

import { WeatherReport } from '../models';
import { LocationService } from '../services/location.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  locations: string[] = [];
  addLocationFormData = {
    zipcode: '',
  };
  weatherReports: Array<WeatherReport | Partial<WeatherReport>> = [];

  private subsink = new SubSink();

  constructor(
    private locationService: LocationService,
    private weatherService: WeatherService,
  ) {}

  ngOnInit(): void {
    this.subsink.sink = this.locationService.location$
      .pipe(
        switchMap((locations) => {
          this.locations = locations;
          return locations?.length
            ? forkJoin(
                locations.map((location) =>
                  this.weatherService.getWeather(location),
                ),
              )
            : of([]);
        }),
      )
      .subscribe((weatherReports) => (this.weatherReports = weatherReports));
  }

  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }

  addLocation(): void {
    this.locationService.addLocation(this.addLocationFormData.zipcode);
  }

  clearLocations(): void {
    this.locationService.clearLocations();
  }
}
