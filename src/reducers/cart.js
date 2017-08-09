import { ADD_TO_CART_ACTION } from '../actions/cartAction';
import { REMOVE_FROM_CART_ACTION } from '../actions/cartAction';

export default function Cart(state = {}, action){
  switch(action.type){
    case ADD_TO_CART_ACTION:
      var newState = Object.assign({}, state);
      action.payload.show && (action.payload = action.payload.show);
      if(newState[action.payload.id])
        newState[action.payload.id].quantity++;
      else
        newState[action.payload.id] = Object.assign(action.payload, {quantity: 1});

      return newState;
    case REMOVE_FROM_CART_ACTION:
      var newState = Object.assign({}, state);

      if(newState[action.payload.id].quantity > 1)
        newState[action.payload.id].quantity--;
      else
        delete newState[action.payload.id];

      return newState;
    default:
      return state;
  }
}
