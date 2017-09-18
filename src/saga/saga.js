import {call, put, takeEvery, fork, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { ADD_MESSAGE_REQUEST, TYPING_OUT_REQUEST, ADD_MESSAGE, TYPING_IN,
         AddMessage, TypingIn } from '../actions/message-actions';
import SocketService from '../utilities/socketService';
import axios from 'axios';


/*function* loadData(){
  let p = yield call(() => axios.get('http://api.tvmaze.com/search/shows?q=big'));
  console.log(p);
}*/

function connect(){
  const socket = new SocketService();
  socket.init();
  return Promise.resolve(socket);
}

function* subscribe(socket){
  return eventChannel(emit => {
    socket.on('msg to room', (data) => {
      //emit emette eventi sul CANALE!! non allo store
      emit(() => new AddMessage({userName: data.userName, content: data.msg}));
    })
    socket.on('typing to room', (data) => {
      emit(() => new TypingIn(data));
    })
    return () => {};
  })
}

function sendTyping(socket, action){
  socket.emit("typing to room", action.payload);
}

function sendMessage(socket, action){
  socket.emit("msg to room", action.payload);
}


function* init(){
  const socket = yield call(connect);
  const channel = yield call(subscribe, socket);
  const p = yield [
    takeEvery(TYPING_OUT_REQUEST, sendTyping, socket),
    takeEvery(ADD_MESSAGE_REQUEST, sendMessage, socket)
  ]
  while(true){
    //catturo eventi sul canale e li invio allo store
    const evt = yield take(channel);
    yield put(evt());
  }
}

export default function* rootSaga(){
  yield fork(init);
}
