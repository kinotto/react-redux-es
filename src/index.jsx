import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app.jsx';
import '../node_modules/font-awesome/scss/font-awesome.scss';
import 'bootstrap/dist/css/bootstrap.css';
import rootReducer from './reducers/index';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Detail from './components/Detail';
import Header from './components/Header';
import Cart from './components/cart/Cart';


let store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

render(
  getTemplate(), document.querySelector("#app")
);

if (module && module.hot) {
  module.hot.accept('./app', () => {
    render(
      getTemplate()
    );
  });
}

function getTemplate() {
  return (
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <div style={{marginTop: '60px'}}>
              <Switch>
                <Route exact path="/" component={App} />
                <Route path="/detail/:videoId" component={Detail} />
                <Route path="/cart" component={Cart} />
                <Redirect from="/*" exact to="/" />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    </AppContainer>
  )
}
