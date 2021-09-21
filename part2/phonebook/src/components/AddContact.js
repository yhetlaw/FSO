import contactService from '../services/contacts';

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
}) => {
  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    //const idOfNewName = persons.filter((person) => person.name === newName)[0].id)

    //Map all names to uppercase and allNumbers
    const allNames = persons.map((person) => person.name.toUpperCase());
    console.log(allNames);
    const allNumbers = persons.map((person) => person.number);
    //If allNames include newName or allNumber include newNumber
    allNames.includes(newName.toUpperCase())
      ? window.confirm(
          `The name ${newName} is already added to the phonebook, replace old number with the new one?`
        )
        ? /* contactService.update(idOfNewName, personObject).then((returnedPerson) => {
            setPersons(persons.splice(idOfNewName - 1, 1, personObject));
            setNewName('');
            setNewNumber('');
            setLength(length + 1 - 1);
          }) */
          console.log('replace')
        : console.log('dont replace')
      : allNumbers.includes(newNumber)
      ? alert(`Number ${newNumber} is taken`)
      : contactService.create(personObject).then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          setNewName('');
          setNewNumber('');
        });
  };

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
  );
};

export default AddContact;
