import React, { useState } from 'react';

const App = (props) => {
  const [persons, setPersons] = useState(props.persons);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    const newSearch = event.target.value;
    const allNames = persons.map((person) => person.name);
    let pResult = document.getElementById('pExists');
    allNames.includes(newSearch) ? (pResult.innerHTML = `${newSearch} does exist`) : (pResult.innerHTML = `${newSearch} does not exist`);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    //Map all names and allNumbers
    const allNames = persons.map((person) => person.name);
    const allNumbers = persons.map((person) => person.number);
    //If allNames include newName or allNumber include newNumber
    allNames.includes(newName)
      ? alert(`${newName} already exists in the list of names of the phonebook`)
      : allNumbers.includes(newNumber)
      ? alert(`${newNumber} already exists in the list of numbers of the phonebook`)
      : setPersons(persons.concat(personObject));
    setNewName('');
    setNewNumber('');
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={addPerson}>
        <h2>Search contact</h2>
        <div>
          Search name: <input onChange={handleSearchChange} />
          <p id='pExists'>{}</p>
        </div>
        <h2>Add a new contact</h2>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Contacts</h2>
      <ul>
        {persons.map((person) => (
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        ))}
      </ul>
    </div>
  );
};

export default App;
