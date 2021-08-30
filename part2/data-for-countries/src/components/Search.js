import React from 'react';
import Image from './Image';

const Search = ({ countries }) => {
  const listCountries = document.getElementById('listCountries');
  const tooMany = document.getElementById('tooMany');
  const inputSearch = document.getElementById('inputSearch');
  const handleSearchChange = (event) => {
    const newSearch = event.target.value.toUpperCase();
    const regex = new RegExp(newSearch);
    const allCountries = countries
      .map((country) => country.name.toUpperCase())
      .filter((country) => country.match(regex));
    console.log(allCountries, allCountries.length);
    //qwe
    if (inputSearch === '') {
      listCountries.innerHTML = '';
      tooMany.innerHTML = '';
    } else if (allCountries.length > 0 && allCountries.length <= 10) {
      listCountries.innerHTML = allCountries.map((country) => `<li>${country}</li>`).join('');
      tooMany.innerHTML = '';
    } else if (allCountries.length > 10) {
      tooMany.innerHTML = 'Too many catches, specify another filter';
      listCountries.innerHTML = '';
    } else {
      console.log('hmmmmmmm');
    }
  };
  return (
    <div>
      Search for countries:
      <input id='inputSearch' onChange={handleSearchChange} />
      <ul id='listCountries'></ul>
      <p id='tooMany'></p>
      <Image country='' />
    </div>
  );
};

export default Search;
