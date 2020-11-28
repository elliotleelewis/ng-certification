import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SubSink } from 'subsink';

import { getConditionImageUrl, getConditionString } from '../helpers';
import { DailyForecast } from '../models';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent implements OnInit, OnDestroy {
  readonly getConditionImageUrl = getConditionImageUrl;
  readonly getConditionString = getConditionString;

  dailyForecast: DailyForecast | Partial<DailyForecast> | null = null;

  private subs = new SubSink();

  constructor(
    private activatedRoute: ActivatedRoute,
    private weatherService: WeatherService,
  ) {}

  ngOnInit(): void {
    this.subs.sink = this.activatedRoute.paramMap
      .pipe(
        switchMap((params) =>
          this.weatherService.getForecast(params.get('zipcode') as string),
        ),
      )
      .subscribe((forecast) => (this.dailyForecast = forecast));
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
