var React = require('react');
import SearchBar from './components/searchBar';
import List from './components/List';


export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <SearchBar />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <List />
          </div>
        </div>
      </div>
    );
  }
}
