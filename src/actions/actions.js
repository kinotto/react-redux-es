import $ from 'jquery';

export const MY_ACTION = 'MY_ACTION';

export function DetailAction(data){
  return {
    type: 'GO_TO_DETAIL',
    payload: data
  }
}

function _SearchAction(data){
  return {
    type: 'FETCH_MOVIES',
    payload: data
  }
}

export function SearchAction(query){
  return (dispatch) => {
    let api = 'http://api.tvmaze.com/search/shows?q=';
    $.get((api + query).split(' ').join('+'), (resp) => {
      dispatch(_SearchAction(resp));
    })
  }
}
