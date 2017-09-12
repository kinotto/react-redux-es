var React = require('react');
import '../style/message.scss';

const Message = ({message, index}) => {
  return (
    <div className={index % 2 == 0 ? 'message message__background--left'
      : 'message message__background--right'}>
      {message.userName ? <div className="message__username">{message.userName} ha scritto:</div> : ''}
      <div className="message__content">{message.content}</div>
    </div>
  )
}

export default Message;
