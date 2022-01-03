import {combineReducers} from 'redux';
import actualLocationForecastState from './actualLocationForecast';
import searchCityState from './searchCity';
import citiesState from './cities';
import findLastWeatherDaysState from './lastWeatherDays';
import citiesForecastState from './citiesForecast';
import changeLanguageState from './changeLanguage';

export default combineReducers({
  actualLocationForecastState,
  searchCityState,
  citiesState,
  citiesForecastState,
  findLastWeatherDaysState,
  changeLanguageState,
});
