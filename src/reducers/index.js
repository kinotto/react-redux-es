import  { combineReducers, createStore } from 'redux';
import Detail from './detail';
import Media from './media';
import Cart from './cart';

const rootReducer = combineReducers({
  Detail,
  Media,
  Cart
})

export default rootReducer;
