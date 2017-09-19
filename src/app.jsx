var React = require('react');
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/saga';
import { Provider } from 'react-redux';
import RootReducer from './reducers/index';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Chat from './components/Chat';
import { initApp } from '.actions/message-actions';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  RootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);
store.dispatch(new initApp(localStorage.getItem('user')));
//store.dispatch(INIT_SOCKET_ASYNC);

export default class App extends React.Component {

  render() {

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
