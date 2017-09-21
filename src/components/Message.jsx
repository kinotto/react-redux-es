var React = require('react');
import '../style/message.scss';

const Message = ({message, index, _class }) => {

  return (
    <div className={ ` message message__background--${_class} `}>
      {message.userName ? <div className="message__username"><b>{message.userName}</b> ha scritto:</div> : ''}
      <div className="message__content">{message.content}</div>
    </div>
  )
}

/*className={index % 2 == 0 ? 'message message__background--left'
  : 'message message__background--right' } */
export default Message;
