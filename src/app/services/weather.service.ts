import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { mapDailyForecast, mapWeatherReport } from '../helpers';
import {
  DailyForecast,
  OpenWeatherMapDailyForecast,
  OpenWeatherMapWeatherReport,
  WeatherReport,
} from '../models';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private static readonly API_BASE_URL =
    'https://api.openweathermap.org/data/2.5';
  private static readonly API_KEY = '5a4b2d457ecbef9eb2a71e480b947604';

  constructor(private httpClient: HttpClient) {}

  getWeather(
    zipcode: string,
  ): Observable<WeatherReport | Partial<WeatherReport>> {
    return this.httpClient
      .get<OpenWeatherMapWeatherReport>(
        `${WeatherService.API_BASE_URL}/weather`,
        {
          params: {
            zip: zipcode,
            units: 'imperial',
            appid: WeatherService.API_KEY,
          },
        },
      )
      .pipe(
        map((report: OpenWeatherMapWeatherReport) =>
          mapWeatherReport(report, zipcode),
        ),
        catchError(() =>
          of({
            locationName: 'ERROR',
            zipcode,
          } as Partial<WeatherReport>),
        ),
      );
  }

  getForecast(
    zipcode: string,
  ): Observable<DailyForecast | Partial<DailyForecast>> {
    return this.httpClient
      .get<OpenWeatherMapDailyForecast>(
        `${WeatherService.API_BASE_URL}/forecast/daily`,
        {
          params: {
            zip: zipcode,
            units: 'imperial',
            appid: WeatherService.API_KEY,
          },
        },
      )
      .pipe(
        map((forecast: OpenWeatherMapDailyForecast) =>
          mapDailyForecast(forecast, zipcode),
        ),
        catchError(() =>
          of({
            locationName: 'ERROR',
            zipcode,
          } as Partial<DailyForecast>),
        ),
      );
  }
}
