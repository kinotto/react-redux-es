const io = require('socket.io-client');
import { CHAT_ENDPOINT } from '../API';

export default class SocketService {

  constructor(){
    let socket;
    this.init = () => socket = io.connect(CHAT_ENDPOINT);
    this.on = (evt, clb) => socket.on(evt, clb);
    this.emit = (evt, data) => socket.emit(evt, data);
  }
  /*init(){
    let socket = io.connect(CHAT_ENDPOINT);
  }

  on(evt, clb){
    socket.on(evt, clb);
  }

  emit(evt, data){
    socket.emit(evt, data);
  }*/

}
