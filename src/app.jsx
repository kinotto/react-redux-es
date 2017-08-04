var React = require('react');
import SearchBar from './components/searchBar';
import List from './components/List';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {data: []};
  }
  get(params){
    APIService.get(params)
      .then( (resp) => {
        this.setState({data: resp});
      })
  }

  goToDetail(video){
    //history.push("/detail");
  }

  render(){
    return (

      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <SearchBar search={this.get.bind(this)} />
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
