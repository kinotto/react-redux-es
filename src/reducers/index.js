import ChatReducer from './Chat-reducer';
//import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';

const RootReducer = combineReducers({
  Chat: ChatReducer
})

export default RootReducer;
