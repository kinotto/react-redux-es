var React = require('react');
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './reducers/index';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/home';
import Chat from './components/chat';


export default class App extends React.Component {

  render() {
    const store = createStore(RootReducer);

    return (
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/chat" component={Chat} />
              <Redirect from="/*" exact to="/" />
            </Switch>
          </BrowserRouter>
        </Provider>
    )
  }
}
