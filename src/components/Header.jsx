var React = require('react');
import { Route } from 'react-router';
import '../style/header.scss';


const Header = () => {
  return (
    <Route render={ ({history}) =>
      <div className="headerContainer">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="header">
                <div className="header__element label" onClick={ e => history.push('/')}> Media </div>
                <div className="header__element cart">
                  <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"
                    onClick={(e) => history.push('/cart')}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> }>
    </Route>
  )
}


export default Header;
