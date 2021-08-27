import React from 'react';

const Search = ({ countries }) => {
  const handleSearchChange = (event) => {
    const newSearch = event.target.value.toUpperCase();
    const listCountries = document.getElementById('listCountries');
    const tooMany = document.getElementById('tooMany');
    const inputSearch = document.getElementById('inputSearch');
    const regex = new RegExp(newSearch);
    const allCountries = countries
      .map((country) => country.name.toUpperCase())
      .filter((country) => country.match(regex));
    console.log(allCountries);

    /* allCountries.length > 0 && allCountries.length <= 10
      ? (listCountries.innerHTML = allCountries.map((country) => `<li>${country}</li>`).join('')) &&
        (tooMany.innerHTML = '')
      : (tooMany.innerHTML = 'Too many catches, specify another filter') &&
        (listCountries.innerHTML = ''); */

    if (inputSearch === '') {
      listCountries.innerHTML = '';
      tooMany.innerHTML = '';
    } else if (allCountries.length > 0 && allCountries.length <= 10) {
      listCountries.innerHTML = allCountries.map((country) => `<li>${country}</li>`).join('');
      tooMany.innerHTML = '';
    } else {
      tooMany.innerHTML = 'Too many catches, specify another filter';
      listCountries.innerHTML = '';
    }
  };
  return (
    <div>
      Search for countries:
      <input id='inputSearch' onChange={handleSearchChange} />
      <ul id='listCountries'></ul>
      <p id='tooMany'></p>
    </div>
  );
};

export default Search;
