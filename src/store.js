import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { productsReducer } from './reducers/productReducers';

const initialState = {};
const compseEnhancer = compose;

const store = createStore(
  combineReducers({
    products: productsReducer,
  }),
  initialState,
  compseEnhancer(applyMiddleware(thunk))
);

export default store;
