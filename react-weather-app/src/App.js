import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import LocationSearch from './containers/LocationSearch/LocationSearch';
import CurrentWeather from './containers/CurrentWeather/CurrentWeather';
import Forecast from './containers/Forecast/Forecast';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={LocationSearch} />
        <Route path="/weather" component={CurrentWeather} />
        <Route path="/weather" component={Forecast} />
      </div>
    );
  }
}

export default App;
