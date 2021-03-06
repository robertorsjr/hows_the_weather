import {findWeatherByGeo} from '../../services/findWeather';
import {ActionProps, DispatchProps, ResponseProps} from '../types';
import Geolocation from 'react-native-geolocation-service';
import {PermissionsAndroid, Platform} from 'react-native';
import {t} from '../../resources';

const isAndroid = Platform.OS === 'android';
const hasPermission = 'granted' || 'restricted';

const Types = {
  REQUEST: 'actualLocationForecast/REQUEST',
  REQUEST_SUCCESS: 'actualLocationForecast/REQUEST_SUCCESS',
  REQUEST_FAILURE: 'actualLocationForecast/REQUEST_FAILURE',
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

export function requestActualLocationForecast() {
  return async (dispatch: DispatchProps) => {
    dispatch(Creators.request());

    try {
      let authResponse = '';

      if (isAndroid) {
        authResponse = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: t('permissionTitle'),
            message: t('permissionMessage'),
            buttonNeutral: t('permissionNeutralButton'),
            buttonNegative: t('permissionNegativeButton'),
            buttonPositive: t('permissionPositiveButton'),
          },
        );
      } else {
        authResponse = await Geolocation.requestAuthorization('whenInUse');
      }

      if (
        authResponse === hasPermission ||
        authResponse === PermissionsAndroid.RESULTS.GRANTED
      ) {
        Geolocation.getCurrentPosition(
          async position => {
            const {data} = await findWeatherByGeo(
              position.coords.latitude,
              position.coords.longitude,
            );

            dispatch(Creators.requestSuccess(data));
          },
          error => {
            // See error code charts below.
            console.warn(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
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

export default function actualLocationForecastState(
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
