var React = require('react');
import { connect } from 'react-redux';
import { AddMessage } from '../actions/message-actions';
import Message  from './Message';
import '../style/chat.scss';

class Chat extends React.Component {

  constructor(props){
    super(props);
  }

  addMessage(e){
    if(e.keyCode == 13){
      this.props.addMessage(this.props.userName, e.target.value);
      e.target.value = '';
      e.preventDefault();
    }

  }

  getMessages(){
    return this.props.messages.map( (msg, index) => {
      return ( <Message message={msg} index={index} key={index}></Message> )
    })
  }
  render(){
    return (
      <div className="chat">
        {this.getMessages()}

        <div className="chat__newMessage">
          <textarea placeholder="Message here" className="form-control chat__newMessage--area"
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
