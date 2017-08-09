var React = require('react');
import '../style/card.scss';
import $ from 'jquery';
import { connect } from 'react-redux';
import { AddToCartAction } from '../actions/cartAction';

class ListItem extends React.Component {

  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="card card--big" onClick={ this.props.onClick }>
        <div className="card__image" style={{backgroundImage: `url( "${this.props.media.show.image && this.props.media.show.image.original}" )` }} ></div>
        <h2 className="card__title">{this.props.media.show.name}</h2>
        <span className="card__subtitle">by ka</span>
        <p className="card__text">{$(this.props.media.show.summary).text().substring(0, 60)} ...</p>
        <div className="card__action-bar">
          <button className="card__button"
            onClick={(e) => {this.props.addToCart(this.props.media); e.stopPropagation();} }>
            <i className="fa fa-shopping-cart fa-2x" aria-hidden="true" style={{color: 'red'}}></i>
          </button>
          <button className="card__button" onClick={ this.props.onClick }>DETAIL</button>
        </div>
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: media => dispatch(AddToCartAction(media))
  }
}
export default connect(null, mapDispatchToProps)(ListItem);
