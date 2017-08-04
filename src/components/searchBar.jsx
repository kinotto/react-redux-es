var React = require('react');
import {connect} from 'react-redux';
import {SearchAction} from '../actions/actions';
import '../style/searchBar.scss';
import '../style/list.scss';

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
        <div className="parentSearch"><input className="form-control searchBar" onKeyPress={ (e) =>
          e.charCode == 13 && this.handleInput(e, {query: e.target.value})}/></div>
    )
  }

}


const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (query) => dispatch(SearchAction(query))
  }
}
export default connect(null, mapDispatchToProps)(SearchBar);
