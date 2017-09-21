var React = require('react');
import '../style/header.scss';

const Header = ({logOut}) => {
  return (
    /*<nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">WebSiteName</a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#">Page 1</a></li>
          <li><a href="#">Page 2</a></li>
          <li><a href="#">Page 3</a></li>
        </ul>
      </div>
    </nav>*/
    <div className="header" onClick={ logOut }>
      LOGOUT
    </div>
  )
}

export default Header;
