import { Condition } from '../enums';

export interface WeatherReport {
  locationName: string;
  zipcode: string;
  currentCondition: Condition;
  temp: number;
  maxTemp: number;
  minTemp: number;
}
