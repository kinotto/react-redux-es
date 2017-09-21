import { ADD_MESSAGE, TYPING_IN } from '../actions/message-actions';
import { SET_USER } from '../actions/user-actions';
import { Map, List } from 'immutable';

export default function ChatReducer (state = Map({typingData: false, messages: List()}), action){
  switch(action.type) {
    case ADD_MESSAGE: {
      /*let messages = state.messages.slice();
      messages.push(action.payload);
      return {userName: state.userName, messages};*/
      //return {userName: state.userName, messages: [...state.messages, action.payload]};
      return state.set('userName', state.get('userName'))
        .set('messages', state.get('messages').push(action.payload));
    }
    case TYPING_IN: {
      //return Object.assign({}, state, {typingData: action.payload});
      return state
        .set('typingData', action.payload)
    }
    case SET_USER:{
      return state
        .set('userName', action.payload);
      //return Object.assign({}, state, {userName: action.payload});
    }
    default:
      return state;
  }
}
