import React from 'react';

const ListItem = ({ handleButtonDelete, text, id, number }) => {
  return (
    <li>
      {text} {number}{' '}
      <button data-id={id} onClick={handleButtonDelete}>
        Delete
      </button>
    </li>
  );
};

const Contacts = ({ persons, setId, id }) => {
  const handleButtonDelete = (event) => {
    setId(event.target.getAttribute('data-id'));
    console.log(id);
    /* if (window.confirm(`Delete ${persons[id].name}?`)) {
      contactService.deletePerson(id).then((deletedPerson) => {
        setPersons(persons.filter((person) => person.id !== deletedPerson.newId));
      });
    } */
  };

  return (
    <div>
      <ul>
        {persons.map((person) => (
          <ListItem
            key={person.name}
            id={persons.id}
            text={person.name}
            number={person.number}
            handleButtonDelete={handleButtonDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
