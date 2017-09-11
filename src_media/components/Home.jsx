var React = require('react');
import SearchBar from './searchBar';
import List from './List';

const Home = () => {
  return (
    <div>
      <div className="row">
        <div className="col-xs-12">
          <List />
        </div>
      </div>
    </div>
  )
}

export default Home;
