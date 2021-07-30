import React, { useState } from 'react';

const App = (props) => {
  const [persons, setPersons] = useState(props.persons);
  const [newName, setNewName] = useState('');

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
    };
    //Map all names
    const allNames = persons.map((person) => person.name);
    //If allNames include newName
    allNames.includes(newName) ? alert(`${newName} is already added to the phonebook`) : setPersons(persons.concat(personObject));
    setNewName('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <p key={person.name}>{person.name}</p>
        ))}
      </ul>
    </div>
  );
};

export default App;
