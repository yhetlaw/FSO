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
          <ListItem key={country.name} text={country.name} handleShowInfo={handleShowInfo} id={country.name} />
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
  const indexCountry = mapedCountries.indexOf(id);
  return (
    <div>
      <h1>{matchedCountries[indexCountry].name}</h1>
      <p>
        The capital of {matchedCountries[indexCountry].name} is {matchedCountries[indexCountry].capital}
      </p>
      <p>
        The population of {matchedCountries[indexCountry].name} is {matchedCountries[indexCountry].population} people
      </p>
      <h2>Languages</h2>
      <ul>
        {matchedCountries[indexCountry].languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img src={matchedCountries[indexCountry].flag} alt={matchedCountries[indexCountry].name} width='170' height='150'></img>
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
      <img src={matchedCountries[0].flag} alt={matchedCountries[0].name} width='170' height='150'></img>
    </div>
  );
};

const Search = ({ countries }) => {
  const inputSearch = document.getElementById('inputSearch');
  const [tooManyCatchesStatus, setTooManyCatchesStatus] = useState(false);
  const [countryListStatus, setCountryListStatus] = useState(false);
  const [fullCountryStatus, setFullCountryStatus] = useState(false);
  const [showInfoStatus, setShowInfoStatus] = useState(false);
  const [matchedCountries, setMatchedCountries] = useState([]);
  const [newSearch, setNewSearch] = useState('');
  const [id, setId] = useState('');

  const handleSearchChange = (event) => {
    const newSearch = event.target.value.toLowerCase();
    setNewSearch(newSearch);
    const matchedCountries = countries.filter((country) => country.name.toLowerCase().match(newSearch));
    setMatchedCountries(matchedCountries);

    if (!inputSearch) {
      setTooManyCatchesStatus(true);
      setFullCountryStatus(false);
      setCountryListStatus(false);
    } else if (matchedCountries.length === 1) {
      setTooManyCatchesStatus(false);
      setFullCountryStatus(true);
      setCountryListStatus(false);
    } else if (matchedCountries.length > 0 && matchedCountries.length <= 10 && matchedCountries.length !== 1) {
      setTooManyCatchesStatus(false);
      setFullCountryStatus(false);
      setCountryListStatus(true);
      setShowInfoStatus(false);
    } else {
      setTooManyCatchesStatus(true);
      setFullCountryStatus(false);
      setCountryListStatus(false);
    }
  };

  const handleShowInfo = (event) => {
    setId(event.target.getAttribute('data-id'));
    !showInfoStatus ? setShowInfoStatus(true) : setShowInfoStatus(false);
  };

  return (
    <div>
      Search for countries:
      <input id='inputSearch' onChange={handleSearchChange} />
      <TooManyCatches status={tooManyCatchesStatus} />
      <CountriesList status={countryListStatus} matchedCountries={matchedCountries} handleShowInfo={handleShowInfo} />
      <FullCountry status={fullCountryStatus} matchedCountries={matchedCountries} newSearch={newSearch} />
      <ShowInfo status={showInfoStatus} matchedCountries={matchedCountries} id={id} />
    </div>
  );
};

export default Search;
