import React, { Component } from 'react';
import './App.css';
//I have to import the component I created
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 28},
      {name: "Manu", age: 22},
      {name: "Stef", age: 5}
    ],
    otherState: "some other value",
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState ({showPersons: !doesShow});
  }

  switchNameHandler = () => {
    this.setState ({
      persons: [
        {name: "Max", age: 58},
        {name: "Manuela", age: 22},
        {name: "Stef", age: 5}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState ({
      persons: [
        {name: "Max", age: 58},
        {name: event.target.value, age: 22},
        {name: "Stef", age: 5}
      ]
    })
  }

  render() {
   const style = {
     backgroundColor: 'white',
     font: 'inherit',
     border: '1px solid blue',
     padding:'8px',
     cursor:'pointer'
   }

   let persons = null;
   if (this.state.showPersons) {
     persons = (
      <div>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler}
          changed={this.nameChangedHandler}>My hobbies: run</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    );
   }


    return (
      <div className="App">
       <h1>Hi I am react app</h1>
       <p>This is working</p>
       <button
         style={style}
         onClick = {this.togglePersonsHandler}>Toggle Persons</button>
         {persons}
      </div>
    );
  }
}

export default App;
