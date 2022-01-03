export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type GeoResponse = {
  id: number;
  name: string;
  code: number;
  visibility: number;
  base: string;
  dt: number;
  timezone: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  coord: {
    lat: number;
    lon: number;
  };
  weather: Weather[];
  clouds: {
    all: number;
  };
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
};
