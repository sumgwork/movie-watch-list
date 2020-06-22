import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
  errors: errorReducer,
  movies: movieReducer,
});

export default rootReducer;
