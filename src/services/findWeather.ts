import api, {endpoints} from './index';

export async function findWeatherByCity(cityName: string) {
  const {get} = await api;
  return get(endpoints.findWeatherByCity(cityName));
}

export async function findWeatherByGeo(lat: number, long: number) {
  const {get} = await api;
  return get(endpoints.findWeatherByGeo(lat, long));
}

export async function findLastWeatherDays(lat: number, long: number) {
  const {get} = await api;
  return get(endpoints.lastWeatherDays(lat, long));
}
