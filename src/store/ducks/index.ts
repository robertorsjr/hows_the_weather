import {combineReducers} from 'redux';
import actualLocationForecastState from './actualLocationForecast';
import searchCityState from './searchCity';
import citiesState from './cities';
import citiesForecatsState from './citiesForecats';

export default combineReducers({
  actualLocationForecastState,
  searchCityState,
  citiesState,
  citiesForecatsState,
});
