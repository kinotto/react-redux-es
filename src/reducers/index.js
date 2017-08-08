import  { combineReducers, createStore } from 'redux';
import Detail from './detail';
import Movies from './movies';
import Cart from './cart';

const rootReducer = combineReducers({
  Detail,
  Movies,
  Cart
})

export default rootReducer;
