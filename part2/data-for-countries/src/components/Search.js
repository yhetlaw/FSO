import React from 'react';
import { useState } from 'react';

const TooManyCatches = (props) => {
  if (!props.status) {
    return null;
  }
  return <p>Too many catches, specify another filter!</p>;
};

const CountriesList = ({ status, matchedCountries }) => {
  if (!status) {
    return null;
  }

  const handleShowInfo = (event) => {
    console.log('the button was clicked');
  };

  return (
    <ul>
      {matchedCountries.map((country) => (
        <li key={country.name}>
          {country.name} <button onClick={handleShowInfo}>Show info</button>{' '}
        </li>
      ))}
    </ul>
  );
};

const FullCountry = ({ status, matchedCountries }) => {
  if (!status) {
    return null;
  }
  return (
    <div>
      <h1>{matchedCountries[0].name}</h1>
      <p>
        The capital of {matchedCountries[0].name} is {matchedCountries[0].capital}
      </p>
      <p>
        The population of {matchedCountries[0].name} is {matchedCountries[0].population} people
      </p>
      <h2>Languages</h2>
      <ul>
        {matchedCountries[0].languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img
        src={matchedCountries[0].flag}
        alt={matchedCountries[0].name}
        width='170'
        height='150'></img>
    </div>
  );
};

const Search = ({ countries }) => {
  const inputSearch = document.getElementById('inputSearch');

  const [warning, setWarning] = useState(false);
  const [countryList, setCountryList] = useState(false);
  const [fullCountry, setFullCountry] = useState(false);
  const [matchedCountries, setMatchedCountries] = useState([]);

  const handleSearchChange = (event) => {
    const newSearch = event.target.value.toLowerCase();
    const matchedCountries = countries.filter((country) =>
      country.name.toLowerCase().match(newSearch)
    );
    setMatchedCountries(matchedCountries);

    if (!inputSearch) {
      setWarning(true);
      setFullCountry(false);
      setCountryList(false);
    } else if (matchedCountries.length === 1) {
      setWarning(false);
      setFullCountry(true);
      setCountryList(false);
    } else if (
      matchedCountries.length > 0 &&
      matchedCountries.length <= 10 &&
      matchedCountries.length !== 1
    ) {
      setWarning(false);
      setFullCountry(false);
      setCountryList(true);
    } else {
      setWarning(true);
      setFullCountry(false);
      setCountryList(false);
    }
  };

  return (
    <div>
      Search for countries:
      <input id='inputSearch' onChange={handleSearchChange} />
      <TooManyCatches status={warning} />
      <CountriesList status={countryList} matchedCountries={matchedCountries} />
      <FullCountry status={fullCountry} matchedCountries={matchedCountries} />
    </div>
  );
};

export default Search;
