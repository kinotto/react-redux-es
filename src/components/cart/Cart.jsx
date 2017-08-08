var React = require('react');
import CartItem from './Cart-item';
import { connect } from 'react-redux';
import '../../style/cart.scss';

class Cart extends React.Component {
  getCartItems = () => {
    return this.props.cart.map( (item) => {
      return <CartItem key={item.id} media={item} />;
    })
  }
  render(){
      return (
        <div className="cart">
          {this.getCartItems()}
        </div>
      )
  }

}

const mapStateToProps = (state) => {
  return {
    cart: state.Cart
  }
}
export default connect(mapStateToProps)(Cart);
