import { Condition } from '../enums';

export interface DailyForecast {
  locationName: string;
  zipcode: string;
  list: Array<{
    dateTime: Date;
    condition: Condition;
    maxTemp: number;
    minTemp: number;
  }>;
}
