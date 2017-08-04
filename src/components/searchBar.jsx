var React = require('react');
import {connect} from 'react-redux';
import {SearchAction} from '../actions/actions';

class SearchBar extends React.Component{

  constructor(props){
    super(props);
    this.search = props.search;
  }

  handleInput(e, val) {
    if(e.charCode == 13){
      let query = e.target.value;
      this.props.onSearch(val.query);
      //this.search(query);
    }
  }
  render(){
    return (
      <div className="row" style={{'marginTop': '20px'}}>
        <div className="col-xs-12">
          <input className="form-control" onKeyPress={ (e) =>
            e.charCode == 13 && this.handleInput(e, {query: e.target.value})}/>
        </div>
      </div>
    )
  }

}


const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (query) => dispatch(SearchAction(query))
  }
}
export default connect(null, mapDispatchToProps)(SearchBar);
