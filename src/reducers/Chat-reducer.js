import { ADD_MESSAGE, TYPING_IN } from '../actions/message-actions';
import { SET_USER } from '../actions/user-actions';

export default function ChatReducer (state = {typingData: false, messages: []}, action){
  switch(action.type) {
    case ADD_MESSAGE: {
      /*let messages = state.messages.slice();
      messages.push(action.payload);
      return {userName: state.userName, messages};*/
      return {userName: state.userName, messages: [...state.messages, action.payload]};
    }
    case TYPING_IN: {
      return Object.assign({}, state, {typingData: action.payload});
    }
    case SET_USER:
      return Object.assign({}, state, {userName: action.payload});

    default:
      return state;
  }
}
