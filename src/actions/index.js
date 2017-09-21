
export const FETCH_BEERS = 'fetch beers';
export const FETCH_BEERS_RESPONSE = 'fetch beers response';
/*const createActions = (type) => {
  ['REQUEST', 'SUCCESS', 'FAILURE'].reduce((acc, el) => {
      acc[el] = el + '_' + type;
      return acc;
  }, {})
}

export const BEERS = createActions('BEERS');
*/
/*function _fetchBeers(payload){

}*/

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
