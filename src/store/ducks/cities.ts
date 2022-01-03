import {ActionProps, DispatchProps, ResponseProps} from '../types';
import {getCitiesForecast} from './citiesForecast';
import {NewCityProps} from '../../models/storeCity';
import {GeoResponse} from '../../models/geo';

const Types = {
  ADD_CITY: 'cities/ADD_CITY',
  REMOVE_CITY: 'cities/REMOVE_CITY',
};

export const Creators = {
  add: (newCities: ResponseProps) => ({
    type: Types.ADD_CITY,
    data: {
      storedCities: newCities,
    },
  }),

  remove: () => ({
    type: Types.REMOVE_CITY,
    data: {},
  }),
};

export function addCity(city: GeoResponse) {
  return (dispatch: DispatchProps, getState: any) => {
    const {storedCities} = getState().citiesState;
    const newCity: NewCityProps = {
      id: city.id,
      name: city.name,
      lat: city.coord.lat,
      lon: city.coord.lon,
      like: false,
    };

    const hasCity = storedCities.find((el: NewCityProps) => el.id === city.id);
    if (!hasCity) {
      dispatch(Creators.add([...storedCities, newCity]));
      dispatch(getCitiesForecast());
    }
  };
}

export function removeCity(id: number) {
  return (dispatch: DispatchProps, getState: any) => {
    const {storedCities} = getState().citiesState;
    const filteredCities = storedCities.filter(
      (storeCity: NewCityProps) => storeCity.id !== id,
    );
    dispatch(Creators.add(filteredCities));
    dispatch(getCitiesForecast());
  };
}

export function likeCity(city: any, like: boolean) {
  return (dispatch: DispatchProps, getState: any) => {
    const {storedCities} = getState().citiesState;

    const newCity = {...city, like};

    const newLikedCities = storedCities.filter((el: any) => el.id !== city.id);

    dispatch(Creators.add([...newLikedCities, newCity]));
    dispatch(getCitiesForecast());
  };
}

const initialState = {
  storedCities: [],
  citiesForecast: [],
};

export default function citiesState(state = initialState, action: ActionProps) {
  const {type, data} = action;

  switch (type) {
    case Types.REMOVE_CITY:
    case Types.ADD_CITY: {
      return {...state, ...data};
    }
    default: {
      return state;
    }
  }
}
