import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

//Add state to the App component (=> the username) and pass the username to the UserOutput component
class App extends Component {
  state = {
    username: "Alberto"
  }

  render() {
    return (
      <div className="App">
        <UserInput/>
        <UserOutput userName={this.state.username}/>
        <UserOutput/>
        <UserOutput/>
      </div>
    );
  }
}

export default App;
