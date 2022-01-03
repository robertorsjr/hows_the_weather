import {findWeatherByCity} from '../../services/findWeather';
import {ActionProps, DispatchProps, ResponseProps} from '../types';

const Types = {
  REQUEST: 'searchCity/REQUEST',
  REQUEST_SUCCESS: 'searchCity/REQUEST_SUCCESS',
  REQUEST_FAILURE: 'searchCity/REQUEST_FAILURE',
};

export const Creators = {
  request: () => ({
    type: Types.REQUEST,
    data: {
      loading: true,
      error: false,
    },
  }),

  requestSuccess: (response: ResponseProps) => ({
    type: Types.REQUEST_SUCCESS,
    data: {
      loading: false,
      data: response,
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

export function requestSearchCity(name: string) {
  return async (dispatch: DispatchProps) => {
    dispatch(Creators.request());

    try {
      const response = await findWeatherByCity(name);
      dispatch(Creators.requestSuccess(response.data));
    } catch (error) {
      dispatch(Creators.requestFailure());
    }
  };
}

const initialState = {
  loading: false,
  error: false,
  data: false,
};

export default function searchCityState(
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
