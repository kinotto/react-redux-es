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
          <App />
        </BrowserRouter>
      </Provider>
    </AppContainer>
  )
}
