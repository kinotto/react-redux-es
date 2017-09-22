import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax'
import { combineEpics } from 'redux-observable';
import * as actions from '../actions';

const api = 'https://api.punkapi.com/v2/beers';

const fetchBeersAsync = (action$, store) => {
  console.log(action$);
  return action$
    .ofType(actions.FETCH_BEERS)
    .switchMap( action => {
      return ajax({url: api }).map(result => {
        return actions.fetchBeersResponse(result.response);
      })
    })
}

export const rootEpic = combineEpics(fetchBeersAsync);
