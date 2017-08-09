var React = require('react');
import { Route } from 'react-router';
import '../style/header.scss';
import { connect } from 'react-redux';

const Header = ({nrCartItems}) => {
  return (
    <Route render={ ({history}) =>
      (<div className="headerContainer">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="header">
                <div className="header__element label" onClick={ e => history.push('/')}> Media </div>
                <div className="header__element cart">
                  <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"
                    onClick={(e) => history.push('/cart')}></i>
                  <div className="header__element cartNr">{nrCartItems}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>) }>
    </Route>
  )
}

const mapStateToProps = (state) => {
  let qty = Object.keys(state.Cart).reduce( (sum, key) => {
   return sum + state.Cart[key].quantity
  }, 0)

  return {
    nrCartItems: qty || null
  }
}

export default connect(mapStateToProps)(Header);
