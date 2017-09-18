var React = require('react');
import { connect } from 'react-redux';
import { AddMessageRequest, TypingOutRequest } from '../actions/message-actions';
import Message  from './Message';
import { CHAT_ENDPOINT } from '../API';
import '../style/chat.scss';

class Chat extends React.Component {

  constructor(props){
    super(props);
    this.state = { isTyping: false };
  }

  addMessage(e){
    if(e.keyCode == 13)
      e.preventDefault();

    if(e.keyCode == 13 && e.target.value !== ''){
      this.props.addMessage({
        img: '',
        userName: this.props.userName,
        msg: e.target.value,
        socketTo: null
      })
      e.target.value = '';
    }
    else
      this.props.typingOut({userName: this.props.userName});
    //this.socket.emit('typing to room', {userName: this.props.userName});
  }

  getMessages(){
    return this.props.messages.map( (msg, index) => {
      return ( <Message message={msg} index={index} key={index}></Message> )
    })
  }
  componentWillReceiveProps(){
    if(this.props.typingData){
      this.setState({isTyping: true});
      setTimeout(() => { this.setState({isTyping: false}) }, 1000);
    }
    else
      this.setState({isTyping: false});
  }

  render(){
    return (
      <div className="chat">
        {!this.props.userName ? location.href = '/' : ''}
        {this.getMessages()}
        {this.state.isTyping ?
          <Message message={{userName: '', content: `${this.props.typingData.userName} sta scrivendo..`}}>
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

const mapStateToProps = ({Chat}) => {
  return Chat;
}
const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (data) => dispatch(new AddMessageRequest(data)),
    typingOut: (data) => dispatch(new TypingOutRequest(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Chat);
