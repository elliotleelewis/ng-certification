export interface OpenWeatherMapDailyForecast {
  city: {
    name: string;
  };
  list: Array<{
    dt: number;
    temp: {
      max: number;
      min: number;
    };
    weather: Array<{
      main: string;
    }>;
  }>;
}
