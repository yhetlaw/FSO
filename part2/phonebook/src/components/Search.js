import React from 'react';

const Search = ({ persons }) => {
  const handleSearchChange = (event) => {
    const newSearch = event.target.value;
    const allNames = persons.map((person) => person.name.toUpperCase());
    let pResult = document.getElementById('pExists');
    allNames.includes(newSearch.toUpperCase()) ? (pResult.innerHTML = `The name ${newSearch} exists`) : (pResult.innerHTML = `The name ${newSearch} does not exist`);
  };

  return (
    <div>
      Search name: <input onChange={handleSearchChange} />
      <p id='pExists'>{}</p>
    </div>
  );
};

export default Search;
