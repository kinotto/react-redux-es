import { ADD_TO_CART_ACTION } from '../actions/cartAction';

export default function Cart(state = [], action){
  switch(action.type){
    case ADD_TO_CART_ACTION:
      var newState = state.slice();
      newState.push(action.payload);
      return newState;

    default:
      return state;
  }
}
