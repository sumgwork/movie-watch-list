import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import movieReducer from './movieReducer';
import routesReducer from './routesReducer';

const rootReducer = combineReducers({
  errors: errorReducer,
  movies: movieReducer,
  routes: routesReducer,
});

export default rootReducer;
