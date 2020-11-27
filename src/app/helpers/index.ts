import { Condition } from '../enums';

export function getConditionImageUrl(condition: Condition): string {
  const baseUrl = 'https://www.angulartraining.com/images/weather';
  switch (condition) {
    case Condition.sun:
      return `${baseUrl}/sun.png`;
    case Condition.snow:
      return `${baseUrl}/snow.png`;
    case Condition.rain:
      return `${baseUrl}/rain.png`;
    case Condition.clouds:
      return `${baseUrl}/clouds.png`;
    default:
      return 'ERROR: Invalid Condition';
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
