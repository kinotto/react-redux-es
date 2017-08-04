var React = require('react');
import '../style/testo.css';

export default class SearchBar extends React.Component {
  constructor(props){
    super(props);
    //console.log(classes);
    this.search = props.search;
  }
  handleEnter(e){
    if(e.charCode === 13){
      this.search(e.target.value);
      e.preventDefault();
    }
  }
  render() {
    return (
       <div className="row pippo" style={{marginTop: 20 + 'px'}}>
          <div className="col-xs-10 col-xs-offset-1">
            <form className="form-group">
              <h2 className="text-center">Youtubo</h2>
              <input type="text" className="form-control" onKeyPress={this.handleEnter.bind(this)} />
            </form>
          </div>
        </div>
    )
  }
}
