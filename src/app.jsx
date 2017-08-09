var React = require('react');
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import Header from './components/Header';
import Cart from './components/cart/Cart';
import $ from 'jquery';
import _ from 'underscore';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    let app = this.refs.app;
    let header = $(app).find('.headerContainer').first();
    let headerTopInitial = header.css('top');
    $(window).on('scroll', _.debounce(() => {
      document.body.scrollTop == 0 ? header.css('top', headerTopInitial ) :  header.css('top', '-50px');
    }, 300))
  }
  render(){
    return (
      <div  ref="app">
        <Header />
        <div style={{marginTop: '60px'}}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/detail/:videoId" component={Detail} />
            <Route path="/cart" component={Cart} />
            <Redirect from="/*" exact to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}
