import React, { useState } from 'react';

const Title = ({ title }) => {
  return <h1>{title}</h1>;
};

const Search = ({ persons }) => {
  const handleSearchChange = (event) => {
    const newSearch = event.target.value;
    const allNames = persons.map((person) => person.name.toUpperCase());
    let pResult = document.getElementById('pExists');
    allNames.includes(newSearch.toUpperCase()) ? (pResult.innerHTML = `${newSearch} does exist`) : (pResult.innerHTML = `${newSearch} does not exist`);
  };

  return (
    <div>
      <Title title='Search contact' />
      Search name: <input onChange={handleSearchChange} />
      <p id='pExists'>{}</p>
    </div>
  );
};

const AddContact = (props) => {
  const handleNameChange = (event) => {
    props.setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    props.setNewNumber(event.target.value);
  };

  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <Title title='Add a new contact' />
        <div>
          name: <input value={props.newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={props.newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </div>
  );
};

const App = (props) => {
  const [persons, setPersons] = useState(props.persons);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    //Map all names to uppercase and allNumbers
    const allNames = persons.map((person) => person.name.toUpperCase());
    console.log(allNames);
    const allNumbers = persons.map((person) => person.number);
    //If allNames include newName or allNumber include newNumber
    allNames.includes(newName.toUpperCase())
      ? alert(`${newName} already exists in the list of names of the phonebook`)
      : allNumbers.includes(newNumber)
      ? alert(`${newNumber} already exists in the list of numbers of the phonebook`)
      : setPersons(persons.concat(personObject));
    setNewName('');
    setNewNumber('');
  };

  return (
    <div>
      <Title title='Phonebook' />
      <Search persons={persons} />
      <AddContact onSubmit={addPerson} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber} />
      <Title title='Contacts' />
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
