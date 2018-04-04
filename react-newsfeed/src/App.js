import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import News from './containers/News/News';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={News} />
      </div>
    );
  }
}

export default App;
