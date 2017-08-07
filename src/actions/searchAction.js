import $ from 'jquery';

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
