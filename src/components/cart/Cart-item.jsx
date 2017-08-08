var React = require('react');

const cartItem = ({media}) => {
  return (
    <div className="cart__item">
      <img className="cart__item--img" src={media.image.original} alt="no img" />
      <span className="cart__item--name">{media.name}</span>
      <span className="cart__item--type">{media.type}</span>
      <span><i className="fa fa-times fa-2x" aria-hidden="true"></i></span>
    </div>

  )
}

export default cartItem;
