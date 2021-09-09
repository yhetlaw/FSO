import React from 'react';
import { useState } from 'react';

const TooManyCatches = (props) => {
  if (!props.status) {
    return null;
  }
  return <p>Too many catches, specify another filter!</p>;
};

const ListItem = ({ handleShowInfo, text, id }) => {
  return (
    <li>
      {text}
      <button data-id={id} onClick={handleShowInfo}>
        Show info
      </button>
    </li>
  );
};

const CountriesList = ({ status, matchedCountries, handleShowInfo }) => {
  if (!status) {
    return null;
  }
  return (
    <div>
      <ul>
        {matchedCountries.map((country) => (
          <ListItem
            key={country.name}
            text={country.name}
            handleShowInfo={handleShowInfo}
            id={country.name}
          />
        ))}
      </ul>
    </div>
  );
};

const ShowInfo = ({ status, matchedCountries, id }) => {
  if (!status) {
    return null;
  }

  const mapedCountries = matchedCountries.map((country) => country.name);
  console.log(id);
  const test = mapedCountries.indexOf(id);
  console.log(test);
  return (
    <div>
      <h1>{matchedCountries[test].name}</h1>
      <p>
        The capital of {matchedCountries[test].name} is {matchedCountries[test].capital}
      </p>
      <p>
        The population of {matchedCountries[test].name} is {matchedCountries[test].population}{' '}
        people
      </p>
      <h2>Languages</h2>
      <ul>
        {matchedCountries[test].languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img
        src={matchedCountries[test].flag}
        alt={matchedCountries[test].name}
        width='170'
        height='150'></img>
    </div>
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
  const [fullCountryStatus, setFullCountryStatus] = useState(false);
  const [matchedCountries, setMatchedCountries] = useState([]);
  const [newSearch, setNewSearch] = useState('');
  const [clickedCountry, setClickedCountry] = useState(false);
  const [id, setId] = useState('');

  const handleSearchChange = (event) => {
    const newSearch = event.target.value.toLowerCase();
    setNewSearch(newSearch);
    const matchedCountries = countries.filter((country) =>
      country.name.toLowerCase().match(newSearch)
    );
    setMatchedCountries(matchedCountries);

    if (!inputSearch) {
      setWarning(true);
      setFullCountryStatus(false);
      setCountryList(false);
    } else if (matchedCountries.length === 1) {
      setWarning(false);
      setFullCountryStatus(true);
      setCountryList(false);
    } else if (
      matchedCountries.length > 0 &&
      matchedCountries.length <= 10 &&
      matchedCountries.length !== 1
    ) {
      setWarning(false);
      setFullCountryStatus(false);
      setCountryList(true);
      setClickedCountry(false);
    } else {
      setWarning(true);
      setFullCountryStatus(false);
      setCountryList(false);
    }
  };

  const handleShowInfo = (event) => {
    console.log('the button was clicked');
    const id = event.target.getAttribute('data-id');
    setId(id);

    if (!clickedCountry) {
      setClickedCountry(true);
    } else {
      setClickedCountry(false);
    }
  };

  console.log(matchedCountries);

  return (
    <div>
      Search for countries:
      <input id='inputSearch' onChange={handleSearchChange} />
      <TooManyCatches status={warning} />
      <CountriesList
        status={countryList}
        matchedCountries={matchedCountries}
        handleShowInfo={handleShowInfo}
      />
      <FullCountry
        status={fullCountryStatus}
        matchedCountries={matchedCountries}
        newSearch={newSearch}
      />
      <ShowInfo status={clickedCountry} matchedCountries={matchedCountries} id={id} />
    </div>
  );
};

export default Search;
