import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app.jsx';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';

/*
 applicazione CHAT
 librerie:
 react, redux, redux-saga, immutableJS
*/

const getTemplate = () => {
  return (
    <AppContainer>
        <App/>
    </AppContainer>
  )
}

render(getTemplate() , document.querySelector("#app"));

if (module && module.hot) {
  module.hot.accept('./app', () => {
    render(
      getTemplate(),
      document.querySelector("#app")
    );
  });
}
