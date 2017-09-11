import { FETCH_MEDIA } from '../actions/SearchAction';

export default function Movies(state = [], action){
  switch(action.type){
    case FETCH_MEDIA:
      return action.payload;
    default:
      return state;
  }
}
