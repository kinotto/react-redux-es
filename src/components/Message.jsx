var React = require('react');
import '../style/message.scss';

const Message = ({message, index}) => {
  return (
    <div className={ index % 2 == 0 ? 'message message__grey' : 'message'}>
      <div className="message__username">{message.userName}</div>
      <div className="message__content">{message.content}</div>
    </div>
  )
}

export default Message;

/*
<div>{message.userName}</div>
<div>{message.content}</div>
<div></div>
*/
