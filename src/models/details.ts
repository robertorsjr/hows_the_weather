import {Weather} from './geo';

export type Daily = {
  dt: number;
  weather: Weather[];
  temp: {
    day: number;
    min: number;
    max: number;
  };
};

export type WeatherDetails = {
  current: {
    dt: number;
    temp: number;
    feels_like: number;
    weather: Weather[];
  };
  daily: Daily[];
};
