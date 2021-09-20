import React from 'react';
import contactService from '../services/contacts';

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

const Contacts = ({ persons, setPersons }) => {
  const handleButtonDelete = (event) => {
    const id = event.target.getAttribute('data-id');
    console.log(id);
    if (window.confirm(`Are you sure you want to delete?`)) {
      contactService
        .deletePerson(id)
        .then((deletedPerson) => {
          setPersons(persons.filter((person) => person.id !== id));
          console.log('Deleted successfully', deletedPerson);
        })
        .catch((error) => {
          console.log('fail');
        });
    }
  };

  return (
    <div>
      <ul>
        {persons.map((person) => (
          <ListItem
            key={person.id}
            id={person.id}
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
