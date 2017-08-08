var React = require('react');
import { connect } from 'react-redux';
import { DetailAction } from '../actions/detailAction';
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
          <div className="text">

            <h2>{this.props.media.name}</h2>

            <p>{ $(this.props.media.summary).text() }</p>

            <h3> Type </h3>
            <p>{this.props.media.type}</p>

            <h3> Language </h3>
            <p>{this.props.media.language}</p>
          </div>
          <div className="text">
            <img src={this.props.media.image && this.props.media.image.original} alt="no img"
              className="img"/>
          </div>
        </div>
      )
      : (<div>{ this.props.dispatch() }</div>)
  }
}

const mapStateToProps = state => {
  return {
    media: state.Detail
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: () => dispatch(DetailAction())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
