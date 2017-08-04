var React = require('react');
import ListItem from './List-item';
import '../style/listItem.css';
import { connect } from 'react-redux';

class List extends React.Component {

  getListItems(){
    return this.props.movies.map( (video) => {
      return (
        <ListItem key={video.show.id} detail={this.props.detail} video={video} />
      );
    })
  }
  render(){
    return (
      <div className="row">
        <div className="col-xs-12">
          { this.getListItems() }
        </div>
      </div>
    );
  }


}
const mapStateToProps = state => {
  return {movies: state.Movies};
}

export default connect(mapStateToProps)(List);
