import axios from 'axios';
import store from '../store';
import {WEATHER_API_KEY} from '../configs';

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

api.interceptors.request.use(config => {
  const state = store.getState();

  const isPtBr = state.changeLanguageState.language === 'pt-br';

  config.params = {
    appid: WEATHER_API_KEY,
    units: isPtBr ? 'metric' : 'imperial',
    lang: isPtBr ? 'pt_br' : 'en',
  };
  return config;
});

export const endpoints = {
  findWeatherByCity: (city: string) => `/weather?q=${city}`,
  findWeatherByGeo: (lat: number, long: number) =>
    `/weather?lat=${lat}&lon=${long}`,
  lastWeatherDays: (lat: number, long: number) =>
    `/onecall?lat=${lat}&lon=${long}&exclude=alerts,minutely,hourly`,
};

export default api;
