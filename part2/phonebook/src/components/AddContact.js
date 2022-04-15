import contactService from '../services/contacts'

const AddContact = ({
  onNameChange,
  onNumberChange,
  persons,
  newName,
  newNumber,
  setNewName,
  setNewNumber,
  setPersons,
  setLength,
  length,
  setAlertMessage,
  setErrorMessage,
}) => {
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }

    //Map all names to uppercase and allNumbers
    const allNames = persons.map((person) => person.name.toUpperCase())
    const allNumbers = persons.map((person) => person.number)
    //If allNames include newName or allNumber include newNumber
    allNames.includes(newName.toUpperCase())
      ? window.confirm(`The name ${newName} is already added to the phonebook, replace old number with the new one?`)
        ? contactService
            .update(persons.filter((person) => person.name === newName)[0].id, personObject)
            .then((returnedPerson) => {
              setPersons(Object.assign(persons, personObject))
              setAlertMessage(`Contact ${newName} has been updated!`)
              setTimeout(() => {
                setAlertMessage(null)
              }, 3000)
              setNewName('')
              setNewNumber('')
              setLength(length + 1)
              setLength(length - 1)
            })
            .catch((error) => {
              setErrorMessage(`Information of ${newName} has already been removed previously!`)
              setTimeout(() => {
                setAlertMessage(null)
              }, 3000)
            })
        : console.log('fail')
      : allNumbers.includes(newNumber)
      ? alert(`Number ${newNumber} is taken`)
      : contactService
          .create(personObject)
          .then((returnedPerson) => {
            setPersons(persons.concat(returnedPerson))
            setAlertMessage(`Contact ${newName} has been added!`)
            setTimeout(() => {
              setAlertMessage(null)
            }, 3000)
            setNewName('')
            setNewNumber('')
          })
          .catch((error) => {
            setErrorMessage(error.response.data.error)
          })
  }

  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={onNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={onNumberChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </div>
  )
}

export default AddContact
