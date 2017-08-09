var React = require('react');

const cartItem = ({media, onRemove}) => {
  return (
    <div className="cart__item">
      <img className="cart__item--img" src={media.image && media.image.original} alt="no img" />
      <span className="cart__item--name">{media.name}</span>
      <span>qty: {media.quantity}</span>
      <span className="cart__item--remove" onClick={(e) => onRemove(media)}>
        <i className="fa fa-times fa-2x" aria-hidden="true"></i>
      </span>
    </div>

  )
}

export default cartItem;
