import { ADD_MESSAGE } from '../actions/message-actions';
import { SET_USER } from '../actions/user-actions';

export default function ChatReducer (state = {messages: [{userName: 'pippo', msg: 'ciao'}]}, action){
  switch(action.type) {
    case ADD_MESSAGE: {
      /*let messages = state.messages.slice();
      messages.push(action.payload);
      return {userName: state.userName, messages};*/
      return {userName: state.userName, messages: [...state.messages, action.payload]};
    }
    case SET_USER:
      return Object.assign({}, state, {userName: action.payload});

    default:
      return state;
  }
}
