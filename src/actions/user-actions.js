export const SET_USER = "set user";

export function SetUser(payload){
  return {
    type: SET_USER,
    payload: payload
  }
}
