import { combineReducers } from 'redux-immutable';
import { Map, List } from 'immutable';
import { FETCH_BEERS_RESPONSE } from '../actions';

const beerReducer = (state = Map({beers: List()}), action) => {
  switch(action.type){
    case FETCH_BEERS_RESPONSE: {
      return state.set('beers', action.payload);
    }
    default:
      return state;
  }
}
export const rootReducer = combineReducers(
  {beerReducer}
)
