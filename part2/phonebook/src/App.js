import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import AddContact from './components/AddContact';
import Contacts from './components/Contacts';
import contactService from './services/contacts';

const App = (props) => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [length, setLength] = useState([]);
  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);

  useEffect(() => {
    contactService.getAll().then((initialPersons) => {
      console.log('promise fulfilled');
      setPersons(initialPersons);
    });
  }, [length]);

  console.log('render', persons.length, 'persons');

  return (
    <div>
      <h1>Phonebook</h1>
      <Search persons={persons} />
      <h1>Add a new contact</h1>
      <AddContact
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
        persons={persons}
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        setPersons={setPersons}
        setLength={setLength}
        length={length}
      />
      <h1>Contacts</h1>
      <Contacts persons={persons} setPersons={setPersons} setLength={setLength} />
    </div>
  );
};

export default App;
