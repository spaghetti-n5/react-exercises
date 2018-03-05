import React, { Component } from 'react';

import './App.css';
import LocationSearch from './containers/LocationSearch/LocationSearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationSearch/>
      </div>
    );
  }
}

export default App;
