import React, { useState } from 'react';

const Title = ({ title }) => {
  return <h1>{title}</h1>;
};

const Search = ({ persons }) => {
  const handleSearchChange = (event) => {
    const newSearch = event.target.value;
    const allNames = persons.map((person) => person.name.toUpperCase());
    let pResult = document.getElementById('pExists');
    allNames.includes(newSearch.toUpperCase()) ? (pResult.innerHTML = `The name ${newSearch} exists`) : (pResult.innerHTML = `The name ${newSearch} does not exist`);
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
        <Title title='Add a new contact' />
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

const Contacts = ({ persons }) => {
  return (
    <div>
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

const App = (props) => {
  const [persons, setPersons] = useState(props.persons);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);

  return (
    <div>
      <Title title='Phonebook' />
      <Search persons={persons} />
      <AddContact
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
        persons={persons}
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        setPersons={setPersons}
      />
      <Title title='Contacts' />
      <Contacts persons={persons} />
    </div>
  );
};

export default App;
