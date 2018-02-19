import axios from 'axios';

//Split the configuration in custom instance:
//Setting different URLs (headers,...) for different parts of the App
//axios.create() creates an instance of the axios object (a copy)
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

//It overwrites the global configuration axios.defaults in index.js
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;
