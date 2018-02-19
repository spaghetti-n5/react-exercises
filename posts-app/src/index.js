import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//use(request configuration); always need to return the request, otherwise will be blocked
axios.interceptors.request.use(request => {
  console.log(request);
  //can edit the request configuration: add comment header
  return request;
},error => {
  //this error is related to sending the request, so if the request sending fail
  console.log(error);
  return Promise.reject(error);
});

//interceptors for handling response
axios.interceptors.request.use(response => {
  console.log(response);
  return response;
},error => {
  console.log(error);
  //Reject the error here so can be hadled with the catch method locally in the component
  return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
