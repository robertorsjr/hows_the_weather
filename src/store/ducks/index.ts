import {combineReducers} from 'redux';
import actualLocationForecastState from './actualLocationForecast';
import searchCityState from './searchCity';
import citiesState from './cities';
import findLastWeatherDaysState from './lastWeatherDays';
import citiesForecastState from './citiesForecast';

export default combineReducers({
  actualLocationForecastState,
  searchCityState,
  citiesState,
  citiesForecastState,
  findLastWeatherDaysState,
});
