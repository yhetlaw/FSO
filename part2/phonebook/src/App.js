import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import AddContact from './components/AddContact'
import Contacts from './components/Contacts'
import contactService from './services/contacts'
import Notification from './components/Notification'
import Error from './components/Error'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [length, setLength] = useState([])
  const [alertMessage, setAlertMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  useEffect(() => {
    contactService.getAll().then((initialPersons) => {
      console.log('promise fulfilled')
      setPersons(initialPersons)
    })
  }, [length])

  console.log('render', persons.length, 'persons')

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
        setAlertMessage={setAlertMessage}
        setErrorMessage={setErrorMessage}
      />
      <h1>Contacts</h1>
      <Notification message={alertMessage} />
      <Error message={errorMessage} />
      <Contacts persons={persons} setPersons={setPersons} setLength={setLength} />
    </div>
  )
}

export default App
