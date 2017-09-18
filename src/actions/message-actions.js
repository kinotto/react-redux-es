export const ADD_MESSAGE = "add message";
export const TYPING_OUT_REQUEST = "typing out request";
export const ADD_MESSAGE_REQUEST = "add message request";
export const TYPING_IN = "typing in";


//intercettate da redux-saga
export function AddMessageRequest(payload){
  return {
    type: ADD_MESSAGE_REQUEST,
    payload: payload
  }
}

//intercettate da redux-saga
export function TypingOutRequest(payload){
  return {
    type: TYPING_OUT_REQUEST,
    payload: payload
  }
}

export function TypingIn(payload){
  return {
    type: TYPING_IN,
    payload: payload
  }
}

export function AddMessage(payload){
  return {
    type: ADD_MESSAGE,
    payload: payload
  }
}
