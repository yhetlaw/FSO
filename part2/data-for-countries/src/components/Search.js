import React from 'react';

const Search = ({ countries }) => {
  const handleSearchChange = (event) => {
    const newSearch = event.target.value.toUpperCase();
    let regex = new RegExp(newSearch);
    const allCountries = countries
      .map((country) => `<li>${country.name.toUpperCase()}</li>`)
      .filter((country) => country.match(regex))
      .join('');
    document.getElementById('result').innerHTML = allCountries;
  };
  return (
    <div>
      Search for countries:
      <input onChange={handleSearchChange} />
      <ul id='result'></ul>
    </div>
  );
};

export default Search;
