import React from 'react';

const AddContact = (props) => {
  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: props.newName,
      number: props.newNumber,
    };
    //Map all names to uppercase and allNumbers
    const allNames = props.persons.map((person) => person.name.toUpperCase());
    console.log(allNames);
    const allNumbers = props.persons.map((person) => person.number);
    //If allNames include newName or allNumber include newNumber
    allNames.includes(props.newName.toUpperCase())
      ? alert(`Name ${props.newName} is taken`)
      : allNumbers.includes(props.newNumber)
      ? alert(`Number ${props.newNumber} is taken`)
      : props.setPersons(props.persons.concat(personObject));
    props.setNewName('');
    props.setNewNumber('');
  };

  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={props.newName} onChange={props.onNameChange} />
        </div>
        <div>
          number: <input value={props.newNumber} onChange={props.onNumberChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
