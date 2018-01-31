import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App'; //Updating the import with new structures
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title="Relevant persons"/>, document.getElementById('root'));
registerServiceWorker();
