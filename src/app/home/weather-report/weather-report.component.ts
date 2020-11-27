import { Component, HostBinding, Input } from '@angular/core';

import { getConditionImageUrl, getConditionString } from '../../helpers';
import { WeatherReport } from '../../models';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css'],
})
export class WeatherReportComponent {
  @HostBinding('class.flex')
  readonly classFlex = true;
  @HostBinding('class.well')
  readonly classWell = true;

  @Input()
  weatherReport!: WeatherReport;

  getConditionString = getConditionString;
  getConditionImageUrl = getConditionImageUrl;

  constructor(private locationService: LocationService) {}

  removeLocation(): void {
    this.locationService.removeLocation(this.weatherReport.zipcode);
  }
}