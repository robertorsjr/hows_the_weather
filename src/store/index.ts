import {createStore, compose} from 'redux';
import middlewares from './middlewares';
import appReducer from './ducks';
import {ActionProps, StateProps} from './types';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['citiesState', 'changeLanguageState'],
};

const rootReducer = (state: StateProps, action: ActionProps) => {
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, compose(...middlewares));
export const persistor = persistStore(store);

export default store;
