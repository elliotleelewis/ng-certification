import { Condition } from '../enums';
import { OpenWeatherMapWeatherReport, WeatherReport } from '../models';

export function convertKelvinToFahrenheit(kelvin: number) {
  return (kelvin - 273.15) * 1.8 + 32;
}

export function mapWeatherReport(
  weatherReport: OpenWeatherMapWeatherReport,
  zipcode: string,
): WeatherReport {
  return {
    locationName: weatherReport.name,
    zipcode,
    currentCondition: getCondition(weatherReport.weather?.[0].main),
    temp: convertKelvinToFahrenheit(weatherReport.main.temp),
    maxTemp: convertKelvinToFahrenheit(weatherReport.main.temp_max),
    minTemp: convertKelvinToFahrenheit(weatherReport.main.temp_min),
  };
}

export function getCondition(conditionString: string): Condition {
  switch (conditionString) {
    case 'Clear':
      return Condition.sun;
    case 'Snow':
      return Condition.snow;
    case 'Rain':
      return Condition.rain;
    case 'Clouds':
      return Condition.clouds;
    default:
      return Condition.error;
  }
}

export function getConditionImageUrl(condition: Condition): string {
  const IMG_BASE_URL = 'https://www.angulartraining.com/images/weather';
  switch (condition) {
    case Condition.sun:
      return `${IMG_BASE_URL}/sun.png`;
    case Condition.snow:
      return `${IMG_BASE_URL}/snow.png`;
    case Condition.rain:
      return `${IMG_BASE_URL}/rain.png`;
    case Condition.clouds:
      return `${IMG_BASE_URL}/clouds.png`;
    default:
      return '/assets/error.svg';
  }
}

export function getConditionString(condition: Condition): string {
  switch (condition) {
    case Condition.sun:
      return 'Sun';
    case Condition.snow:
      return 'Snow';
    case Condition.rain:
      return 'Rain';
    case Condition.clouds:
      return 'Clouds';
    default:
      return 'ERROR: Invalid Condition';
  }
}
