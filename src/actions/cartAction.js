export const ADD_TO_CART_ACTION = 'add to cart';
export const REMOVE_FROM_CART_ACTION = 'remove from cart';

export function AddToCartAction(media){
  return {
    type: ADD_TO_CART_ACTION,
    payload: media
  }
}

export function RemoveFromCartAction(media){
  return {
    type: REMOVE_FROM_CART_ACTION,
    payload: media
  }
}
