
export const FETCH_BEERS = 'fetch beers';
export const FETCH_BEERS_RESPONSE = 'fetch beers response';

export function fetchBeers(payload){
  return {
    type: FETCH_BEERS,
    payload: payload
  }
}

export function fetchBeersResponse(payload){
  return {
    type: FETCH_BEERS_RESPONSE,
    payload: payload
  }
}
