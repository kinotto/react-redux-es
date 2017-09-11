var React = require('react');
import ListItem from './List-item';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { DetailAction } from '../actions/detailAction';

class List extends React.Component {

  getListItems(history){
    return this.props.media.map( (media) => {
      return (
        <ListItem onClick={(e) => {history.push(`/detail/${media.show.id}`); this.props.dispatch(media.show.id)} }
          key={media.show.id}
          detail={this.props.detail}
          media={media} />
      );
    })
  }
  render(){
    return (
      <Route render={ ({history}) =>
        <div className="wrapItems">
          {this.getListItems(history)}
        </div> }>
      </Route>
    );
  }


}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: media => dispatch(DetailAction(media))
  }
}
const mapStateToProps = state => {
  return {
    media: state.Media
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
