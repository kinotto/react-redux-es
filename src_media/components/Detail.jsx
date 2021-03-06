var React = require('react');
import { connect } from 'react-redux';
import { DetailAction } from '../actions/detailAction';
import { AddToCartAction } from '../actions/cartAction';
import $ from 'jquery';
import '../style/detail.scss';

class Detail extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return this.props.media.name ?
      (

        <div className="detail container">
          <div className="child">
            <h2>{this.props.media.name}</h2>
            <p>{ $(this.props.media.summary).text() }</p>
            <h3> Type </h3>
            <p>{this.props.media.type}</p>
            <h3> Language </h3>
            <p>{this.props.media.language}</p>
            <button className="buyBtn" onClick={(e) => this.props.addToCart(this.props.media)}> Buy it!</button>
          </div>
          <div className="child">
            <img src={this.props.media.image && this.props.media.image.original} alt="no img"
              className="img"/>
          </div>
        </div>
      )
      : (<div>{ this.props.goToDetail() }</div>)
  }
}

const mapStateToProps = state => {
  return {
    media: state.Detail
  }
}

const mapDispatchToProps = dispatch => {
  return {
    goToDetail: () => dispatch(DetailAction()),
    addToCart: (media) => dispatch(AddToCartAction(media))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
