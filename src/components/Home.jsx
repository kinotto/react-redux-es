var React = require('react');
import { connect } from 'react-redux';
import { getBeers } from '../reducers';
import '../style/home.scss';

class Home extends React.Component {
  render(){
    return (
      <ul className="list-group">
        {
          this.props.beers.map( beer =>
              <li key={beer.id} className="list-group-item">
                <img src={beer.image_url} className="home__img" />
                <span className="home__description">{ beer.description } </span>
              </li>
            )
        }
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    beers: getBeers(state)
  }
}
export default connect(mapStateToProps)(Home);
