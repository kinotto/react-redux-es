import { combineReducers } from 'redux-immutable';
import { Map, List } from 'immutable';
import { FETCH_BEERS_RESPONSE } from '../actions';
import { createSelector } from 'reselect';

const beerReducer = (state = Map({data: List()}), action) => {
  switch(action.type){
    case FETCH_BEERS_RESPONSE: {
      return state.set('data', action.payload);
    }
    default:
      return state;
  }
}

//selector
const beerSelector = state => state.get('beers')

//selettore memoizzato
export const getBeers  = createSelector(
    [beerSelector],
    beers => beers.get('data')
)

export const rootReducer = combineReducers(
  {beers: beerReducer}
)
