import axios from 'axios';
import {WEATHER_API_KEY} from '../configs';

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

const defaultParams = `&appid=${WEATHER_API_KEY}&units=metric&lang=pt_br`;

export const endpoints = {
  findWeatherByCity: (city: string) => `/weather?q=${city}${defaultParams}`,
  findWeatherByGeo: (lat: number, long: number) =>
    `/weather?lat=${lat}&lon=${long}${defaultParams}`,
  lastWeatherDays: (lat: number, long: number) =>
    `/onecall?lat=${lat}&lon=${long}&exclude=alerts,minutely,hourly${defaultParams}`,
};

export default api;
