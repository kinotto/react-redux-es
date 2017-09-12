var React = require('react');
var io = require('socket.io-client');
import { connect } from 'react-redux';
import { AddMessage } from '../actions/message-actions';
import Message  from './Message';
import { CHAT_ENDPOINT } from '../API';
import '../style/chat.scss';

class Chat extends React.Component {

  constructor(props){
    super(props);
    this.state = {typingData: false};
    this.socket = io.connect(CHAT_ENDPOINT);
    this.socket.on('msg to room', (data) => {
      this.props.addMessage(data.userName, data.msg);
    })

    this.typingTO;
    this.socket.on('typing to room', (data) => {
      this.setState({typingData: data});
      if(this.typingTO)
        clearTimeout(this.typingTO);
      this.typingTO = setTimeout(() => {this.setState({typingData: false});}, 1000);
    })

  }

  addMessage(e){
    if(e.keyCode == 13)
      e.preventDefault();
  
    if(e.keyCode == 13 && e.target.value !== ''){
      e.preventDefault();
      this.socket.emit('msg to room', {
        img: '',
        userName: this.props.userName,
        msg: e.target.value,
        socketTo: null
      });
      e.target.value = '';
      this.setState({typingData: false});
    }

    this.socket.emit('typing to room', {userName: this.props.userName});
  }

  getMessages(){
    return this.props.messages.map( (msg, index) => {
      return ( <Message message={msg} index={index} key={index}></Message> )
    })
  }
  render(){

    return (
      <div className="chat">
        {!this.props.userName ? location.href = '/' : ''}
        {this.getMessages()}
        {this.state.typingData ?
          <Message message={{userName: '', content: `${this.state.typingData.userName} sta scrivendo..`}}>
          </Message>
          : ''}

        <div className="chat__newMessage">
          <textarea placeholder="Message here" className={this.props.messages.length
            ? 'chat__newMessage__area form-control '
            : 'chat__newMessage__area chat__newMessage__area--empty form-control '}
            onKeyDown={ this.addMessage.bind(this) }/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.Chat.messages,
    userName: state.Chat.userName
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (userName, msg) => dispatch(new AddMessage({userName: userName, content: msg}))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Chat);
