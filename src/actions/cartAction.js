export const ADD_TO_CART_ACTION = 'add to cart';


export function AddToCartAction(media){
  return {
    type: ADD_TO_CART_ACTION,
    payload: media
  }
}
