import { DETAIL_ACTION } from '../actions/detailAction';

export default function Detail (state = {}, action){
  switch(action.type){
    case DETAIL_ACTION:
      return action.payload;
    default:
      return state;
  }
}
