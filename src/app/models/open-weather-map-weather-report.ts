export interface OpenWeatherMapWeatherReport {
  name: string;
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: {
    main: string;
  }[];
}
