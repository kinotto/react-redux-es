import $ from 'jquery';
export const DETAIL_ACTION = 'GO_TO_DETAIL';

function _DetailAction(media) {
  return {
    type: DETAIL_ACTION,
    payload: media
  };
}

export function DetailAction (mediaId){
  mediaId = mediaId || location.href.split('/').slice(-1).join('');
  let api = 'http://api.tvmaze.com/shows/';
  return (dispatch) => {
    $.get((api + mediaId), (resp) => {
        dispatch(_DetailAction(resp));
    })
  }
}
