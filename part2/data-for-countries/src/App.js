import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Info = () => {
  return (
    <div>
      <h1>Portugal</h1>
      <h2>200000</h2>
    </div>
  );
};

const Search = ({ countries }) => {
  const listCountries = document.getElementById('listCountries');
  const result = document.getElementById('result');
  const inputSearch = document.getElementById('inputSearch');
  const info = document.getElementById('info');

  const handleSearchChange = (event) => {
    const newSearch = event.target.value.toLowerCase();
    const allCountries = countries.filter((country) => country.name.toLowerCase().match(newSearch));

    console.log(allCountries, allCountries.length);

    if (inputSearch === '') {
      listCountries.innerHTML = '';
      result.innerHTML = '';
    } else if (allCountries.length === 1) {
      result.innerHTML = `<h1>${allCountries[0].name}</h1>
      <p>The capital of ${allCountries[0].name} is ${allCountries[0].capital}</p>
      <p>The population of ${allCountries[0].name} is ${allCountries[0].population} people</p>
      <h2>Languages</h2>
      <ul>
        ${allCountries[0].languages.map((language) => `<li>${language.name}</li>`).join('')}
      </ul>
      <img src="${allCountries[0].flag}" alt="${allCountries[0].name}" width="170" height="150"> `;
      console.log(allCountries[0]);
      listCountries.innerHTML = '';
      info.innerHTML = '<Info />';
    } else if (allCountries.length > 0 && allCountries.length <= 10 && allCountries.length !== 1) {
      listCountries.innerHTML = allCountries.map((country) => `<li>${country.name}</li>`).join('');
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
      <div id='info'></div>
    </div>
  );
};

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    console.log('effect');
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      console.log('promise fulfilled');
      setCountries(response.data);
    });
  }, []);
  console.log('render', countries.length, 'countries');

  return (
    <div>
      <h1>Data for countries</h1>
      <Search countries={countries} />
    </div>
  );
};

export default App;
