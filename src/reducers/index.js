import  { combineReducers, createStore } from 'redux';
import Detail from './detail';
import Movies from './movies';

const rootReducer = combineReducers({
  Detail,
  Movies
})

export default rootReducer;
