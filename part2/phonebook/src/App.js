import React, { useState } from 'react';
import Search from './components/Search';
import AddContact from './components/AddContact';
import Contacts from './components/Contacts';

const App = (props) => {
  const [persons, setPersons] = useState(props.persons);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);

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
      />
      <h1>Contacts</h1>
      <Contacts persons={persons} />
    </div>
  );
};

export default App;
