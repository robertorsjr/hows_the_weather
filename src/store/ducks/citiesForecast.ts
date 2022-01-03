import {ActionProps, DispatchProps, ResponseProps} from '../types';
import {findWeatherByGeo} from '../../services/findWeather';

const Types = {
  REQUEST: 'citiesForecast/REQUEST',
  REQUEST_SUCCESS: 'citiesForecast/REQUEST_SUCCESS',
  REQUEST_FAILURE: 'citiesForecast/REQUEST_FAILURE',
};

export const Creators = {
  request: () => ({
    type: Types.REQUEST,
    data: {
      loading: true,
      error: false,
      citiesForecast: [],
    },
  }),

  requestSuccess: (response: ResponseProps) => ({
    type: Types.REQUEST_SUCCESS,
    data: {
      loading: false,
      citiesForecast: response,
    },
  }),

  requestFailure: () => ({
    type: Types.REQUEST_FAILURE,
    data: {
      loading: false,
      error: true,
    },
  }),
};

export function getCitiesForecast() {
  return async (dispatch: DispatchProps, getState: any) => {
    dispatch(Creators.request());

    try {
      const {storedCities} = getState().citiesState;
      const promises = storedCities
        .sort((a: any, b: any) => b.like - a.like)
        .map(async (el: any) => {
          return findWeatherByGeo(el.lat, el.lon);
        });

      const responses = await Promise.all(promises);

      dispatch(Creators.requestSuccess(responses.map((el: any) => el.data)));
    } catch (error) {
      dispatch(Creators.requestFailure());
    }
  };
}

const initialState = {
  loading: false,
  error: false,
  citiesForecast: [],
};

export default function citiesForecastState(
  state = initialState,
  action: ActionProps,
) {
  const {type, data} = action;

  switch (type) {
    case Types.REQUEST_SUCCESS: {
      return {...state, ...data};
    }
    case Types.REQUEST_FAILURE:
    case Types.REQUEST: {
      return {...state, ...data};
    }

    default: {
      return state;
    }
  }
}
