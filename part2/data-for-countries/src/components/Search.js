import React from 'react';

const Search = ({ countries }) => {
  const listCountries = document.getElementById('listCountries');
  const result = document.getElementById('result');
  const inputSearch = document.getElementById('inputSearch');

  const handleSearchChange = (event) => {
    const newSearch = event.target.value.toLowerCase();
    const matchedCountries = countries.filter((country) => country.name.toLowerCase().match(newSearch));
    if (inputSearch === '') {
      listCountries.innerHTML = '';
      result.innerHTML = '';
    } else if (matchedCountries.length === 1) {
      result.innerHTML = `<h1>${matchedCountries[0].name}</h1>
        <p>The capital of ${matchedCountries[0].name} is ${matchedCountries[0].capital}</p>
        <p>The population of ${matchedCountries[0].name} is ${matchedCountries[0].population} people</p>
        <h2>Languages</h2>
        <ul>
          ${matchedCountries[0].languages.map((language) => `<li>${language.name}</li>`).join('')}
        </ul>
        <img src="${matchedCountries[0].flag}" alt="${matchedCountries[0].name}" width="170" height="150"> `;
      listCountries.innerHTML = '';
    } else if (matchedCountries.length > 0 && matchedCountries.length <= 10 && matchedCountries.length !== 1) {
      listCountries.innerHTML = matchedCountries.map((country) => `<li>${country.name}</li>`).join('');
      result.innerHTML = '';
    } else {
      result.innerHTML = 'Too many catches, specify another filter';
      listCountries.innerHTML = '';
    }
  };

  return (
    <div>
      Search for countries:
      <input id='inputSearch' onChange={handleSearchChange} />
      <ul id='listCountries'></ul>
      <div id='result'></div>
    </div>
  );
};

export default Search;
