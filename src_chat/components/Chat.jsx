var React = require('react');
import { connect } from 'react-redux';
import { AddMessageRequest, TypingOutRequest } from '../actions/message-actions';
import Message  from './Message';
import { CHAT_ENDPOINT } from '../API';
import '../style/chat.scss';
import Header from './Header';


class Chat extends React.Component {

  constructor(props){
    super(props);
    this.state = { isTyping: false };
  }

  getMessageClass(prevMessageIdx, userName){
    let prevDOM = $('.message')[prevMessageIdx];
    if(prevMessageIdx === false || isNaN(prevMessageIdx) || prevMessageIdx < 0)
      return 'left';
    if(this.props.messages.get(prevMessageIdx).userName === userName){
      return $(prevDOM).attr('class').indexOf('left') !== -1 ? 'left' : 'right';
    } else{
      return $(prevDOM).attr('class').indexOf('left') !== -1 ? 'right' : 'left';
    }
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
  }

  getMessages(){
    return this.props.messages.map( (msg, index) => {
      return ( <Message message={msg} _class={ this.getMessageClass(index - 1, msg.userName) }
                index={index} key={index}></Message> )
    })
  }

  componentDidMount(){
    !this.props.userName && this.props.history.push('/');
  }
  componentWillReceiveProps(){
    if(this.props.typingData){
      this.timeout && clearTimeout(this.timeout);
      this.setState({isTyping: true});
      this.timeout = setTimeout(() => { this.setState({isTyping: false}) }, 1000);
    }
    else
      this.setState({isTyping: false});
  }

  render(){
    return (
      <div className="chat">
        <Header logOut={ () => { this.props.history.goBack(); localStorage.removeItem('user'); }}/>
        {this.getMessages()}
        {this.state.isTyping ?
          <Message message={{userName: '', content: `${this.props.typingData.userName} sta scrivendo..`}}
          _class={this.getMessageClass(this.props.messages.size  == 1 ? 0 : this.props.messages.size - 2,
             this.props.typingData.userName)}>
          </Message>
          : ''}

        <div className="chat__newMessage">
          <textarea placeholder="Message here" className={this.props.messages.size
            ? 'chat__newMessage__area form-control '
            : 'chat__newMessage__area chat__newMessage__area--empty form-control '}
            onKeyDown={ this.addMessage.bind(this) }/>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let immutableChat = state.get('Chat');
  let p = {
    messages: immutableChat.get('messages'),
    typingData: immutableChat.get('typingData'),
    userName: immutableChat.get('userName')
  }
  //return immutableChat.toJS();
  return p;
  //return {messages: [], typingData: false};
}
const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (data) => dispatch(new AddMessageRequest(data)),
    typingOut: (data) => dispatch(new TypingOutRequest(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Chat);
