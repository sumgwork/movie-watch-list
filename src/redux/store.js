import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middlewares = [thunk];

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
