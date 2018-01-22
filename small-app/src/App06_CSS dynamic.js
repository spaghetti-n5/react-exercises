import React, { Component } from 'react';
import './App.css';
//I have to import the component I created
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: "a1", name: "Max", age: 28},
      {id: "a2", name: "Manu", age: 22},
      {id: "a3", name: "Stef", age: 5}
    ],
    otherState: "some other value",
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState ({showPersons: !doesShow});
  }

  deletePersonsHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
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
     backgroundColor: 'green',
     color: 'white',
     font: 'inherit',
     border: '1px solid blue',
     padding:'8px',
     cursor:'pointer'
   }

   let persons = null;

   if (this.state.showPersons) {
     persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person
                    click={()=> this.deletePersonsHandler(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id} />
        })}
      </div>
    );
    /*Set the style dynamically*/
    style.backgroundColor = 'red';
   }

   /*CSS list we assign using array, joining the string*/
   /*const classes =['red','bold'].join(' ');*/

   /*Setting CSS class to the paragraph dinamically, related to the number of persons are displayed*/
   /*I have than to join the array Classes to create a real CSS class*/
   const classes =[];
   if (this.state.persons.length <= 2) {
     classes.push("red"); //classes = ['red']
   }
   if (this.state.persons.length <=1) {
     classes.push("bold"); //classes = ['red', 'bold']
   }

    return (
      <div className="App">
       <h1>Hi I am react app</h1>
       <p className={classes.join(" ")}>This is working</p>
       <button
         style={style}
         onClick = {this.togglePersonsHandler}>Toggle Persons</button>
         {persons}
      </div>
    );
  }
}

export default App;
