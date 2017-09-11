export const ADD_MESSAGE = "add message";

export function AddMessage(payload){
  return {
    type: ADD_MESSAGE,
    payload: payload
  }
}
