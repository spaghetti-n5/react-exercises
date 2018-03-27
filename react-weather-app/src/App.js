import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import CurrentWeather from './containers/CurrentWeather/CurrentWeather';
import Forecast from './containers/Forecast/Forecast';
import Layout from './components/Layout/Layout';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/weather" component={CurrentWeather} />
          <Route path="/weather" component={Forecast} />
        </Layout>
      </div>
    );
  }
}

export default App;
