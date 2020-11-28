import { Condition } from '../enums';

export interface WeatherReport {
  locationName: string;
  zipcode: string;
  condition: Condition;
  temp: number;
  maxTemp: number;
  minTemp: number;
}
