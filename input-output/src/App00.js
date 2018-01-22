import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

//Pass a username (of your choice) to UserOutput via props and display it there
class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput/>
        <UserOutput userName="Romeo"/>
        <UserOutput/>
        <UserOutput/>
      </div>
    );
  }
}

export default App;
