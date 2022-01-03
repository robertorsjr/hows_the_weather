import Reactotron from '../utils/ReactotronConfig';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const middlewares = [applyMiddleware(thunk), Reactotron.createEnhancer()];

/* eslint-enable */
export default middlewares;
