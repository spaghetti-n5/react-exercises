import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
//Add a method to manipulate the state (=> an event-handler method)
class App extends Component {
  state = {
    username: "Alberto"
  }

  changeUsernameHandler = () => {
    this.setState = {
      username: "Juanita"
    }
  }

  render() {
    return (
      <div className="App">
        <UserInput/>
        <UserOutput userName="Romeo"/>
        <UserOutput userName={this.state.username}/>
        <UserOutput/>
        <UserOutput/>
      </div>
    );
  }
}

export default App;
