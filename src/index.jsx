import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import rootReducer from './reducers/index';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

let store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

render( <AppContainer><Provider store={store}><App/></Provider></AppContainer>, document.querySelector("#app"));

if (module && module.hot) {
  module.hot.accept('./app', () => {
    render(
        <AppContainer>
          <Provider store={store}>
            <App/>
          </Provider>
        </AppContainer>,
      document.querySelector("#app")
    );
  });
}
