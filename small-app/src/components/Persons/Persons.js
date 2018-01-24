import React from 'react';
import Person from './Person/Person';

/*function components (not manage state) that render the list of person
(map the array in an array of persons): Persons*/
/*Inline arrow function with () and without return*/

const persons = (props) => props.persons.map((person, index) => {
        return <Person
                click={()=> props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={( event ) => props.changed( event, person.id )}/>
  }
);

export default persons;
