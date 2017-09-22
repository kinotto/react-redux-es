var React = require('react');
var ReactDOM = require('react-dom');
import 'bootstrap/dist/css/bootstrap.css';
import App from './app';

/*
 esercizio di chiamata a endpoint che restituisce una lista di birre da renderizzare
 stack:
 react, redux, redux-observable, immutableJS, reselect
*/

const getTemplate = () => {
  return (
    <App/>
  )
}
ReactDOM.render(getTemplate(), document.querySelector('#myApp'));
