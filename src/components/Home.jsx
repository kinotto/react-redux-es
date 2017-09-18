var React = require('react');
import '../style/home.scss';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { SetUser } from '../actions/user-actions';

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      userName: ''
    }
  }
  goToChat(history){
      history.push('/chat');
      this.props.setUser(this.state.userName)
  }
  render(){
    return (
      <Route render={ ({history}) =>
        <div className="home">
            <h1>Enter chat room </h1>
            <input type="text" className="form-control home__username" value={this.state.userName}
              onChange ={ e => this.setState({userName: e.target.value})}
              onKeyDown={ e => e.keyCode == 13 && this.state.userName
                && this.goToChat(history)} />
            <button className="btn btn-primary" onClick={e => this.goToChat(history)}
              disabled={!this.state.userName}> join </button>
        </div>
      }>
      </Route>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (userName) => dispatch(new SetUser(userName))
  }
}
export default connect(null, mapDispatchToProps)(Home);
