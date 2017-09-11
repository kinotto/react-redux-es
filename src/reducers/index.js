import ChatReducer from './Chat-reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  Chat: ChatReducer
})

export default RootReducer;
