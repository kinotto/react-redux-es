var React = require('react');
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer } from './reducers';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/home';
import { fetchBeers } from './actions';
import { rootEpic } from './epic';
const epicMiddleware = createEpicMiddleware(rootEpic);
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

store.dispatch(new fetchBeers()); //innesco chiamata API per fetch birre

export default class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} />
            <Redirect from="/*" to="/" />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
