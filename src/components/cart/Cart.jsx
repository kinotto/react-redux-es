var React = require('react');
import CartItem from './Cart-item';
import { RemoveFromCartAction } from '../../actions/cartAction';
import { connect } from 'react-redux';
import '../../style/cart.scss';

class Cart extends React.Component {
  getCartItems = () => {
    return Object.keys(this.props.cart).map( (mediaKey) => {
      return <CartItem key={mediaKey} media={this.props.cart[mediaKey]}
        onRemove={this.props.remove}/>;
    })
  }
  render(){
      return Object.keys(this.props.cart).length ? (
        <div className="cart">
          {this.getCartItems()}
        </div>
      ) : (
        <h4 style={{textAlign:'center'}}>Empty cart</h4>
      )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    remove: media => dispatch(RemoveFromCartAction(media))
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.Cart
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
