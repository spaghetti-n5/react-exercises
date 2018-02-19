import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//Default global configuration for axios:
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'; //When sending request to the same URL
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

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
axios.interceptors.response.use(response => {
  console.log(response);
  return response;
},error => {
  console.log(error);
  //Reject the error here so can be hadled with the catch method locally in the component
  return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
