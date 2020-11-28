export interface OpenWeatherMapDailyForecast {
  city: {
    name: string;
  };
  list: {
    dt: number;
    temp: {
      max: number;
      min: number;
    };
    weather: {
      main: string;
    }[];
  }[];
}
