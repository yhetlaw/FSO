import React from 'react';
import { useState } from 'react';

const TooManyCatches = ({ status }) => {
  if (!status) {
    return null;
  }
  return <p>Too many catches, specify another filter!</p>;
};

const ListItem = ({ handleShowInfo, text, id }) => {
  return (
    <li>
      {text}{' '}
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

const ShowInfo = ({ status, matchedCountries, weather, indexCountry, setCapital }) => {
  if (!status) {
    return null;
  }
  setCapital(matchedCountries[indexCountry].capital);
  return (
    <div>
      <h1>{matchedCountries[indexCountry].name.common}</h1>
      <p>
        The capital of {matchedCountries[indexCountry].name.common} is{' '}
        {matchedCountries[indexCountry].capital[0]}
      </p>
      <p>
        The population of {matchedCountries[indexCountry].name.common} is{' '}
        {matchedCountries[indexCountry].population} people
      </p>
      <h2>Languages</h2>
      <ul>
        {matchedCountries[indexCountry].languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img
        src={matchedCountries[indexCountry].flag}
        alt={matchedCountries[indexCountry].name.common}
        width='170'
        height='150'></img>
      <h2>Weather in {matchedCountries[indexCountry].capital}</h2>
      <p>
        <b>temperature:</b> {weather.current.temperature} Celsius
      </p>
      <img
        src={weather.current.weather_icons}
        alt={weather.current.weather_descriptions}
        width='70'
        height='70'></img>
      <p>
        <b>wind:</b> {weather.current.wind_speed} mph, direction {weather.current.wind_dir}
      </p>
    </div>
  );
};

const FullCountry = ({ status, matchedCountries, weather }) => {
  if (!status) {
    return null;
  }
  return (
    <div>
      <h1>{matchedCountries[0].name.common}</h1>
      <p>
        The capital of {matchedCountries[0].name.common} is {matchedCountries[0].capital[0]}
      </p>
      <p>
        The population of {matchedCountries[0].name.common} is {matchedCountries[0].population}{' '}
        people
      </p>
      <h2>Languages</h2>
      <ul>
        {matchedCountries[0].languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img
        src={matchedCountries[0].flag}
        alt={matchedCountries[0].name.common}
        width='170'
        height='150'></img>
      <h2>Weather in {matchedCountries[0].capital[0]}</h2>
      <p>
        <b>temperature:</b> {weather.current.temperature} Celsius
      </p>
      <img
        src={weather.current.weather_icons}
        alt={weather.current.weather_descriptions}
        width='70'
        height='70'></img>
      <p>
        <b>wind:</b> {weather.current.wind_speed} mph, direction {weather.current.wind_dir}
      </p>
    </div>
  );
};

const Search = ({ countries, weather, setCapital, capital }) => {
  const inputSearch = document.getElementById('inputSearch');
  const [tooManyCatchesStatus, setTooManyCatchesStatus] = useState(false);
  const [countryListStatus, setCountryListStatus] = useState(false);
  const [fullCountryStatus, setFullCountryStatus] = useState(false);
  const [showInfoStatus, setShowInfoStatus] = useState(false);
  const [matchedCountries, setMatchedCountries] = useState([]);
  const [newSearch, setNewSearch] = useState('');
  const [id, setId] = useState('');

  const mapedCountries = matchedCountries.map((country) => country.name.common);
  const indexCountry = mapedCountries.indexOf(id);

  const handleSearchChange = (event) => {
    const newSearch = event.target.value.toString().toLowerCase();
    setNewSearch(newSearch);
    const matchedCountries = countries.filter((country) =>
      country.name.toString().toLowerCase().match(newSearch)
    );
    setMatchedCountries(matchedCountries);
    if (!inputSearch) {
      setTooManyCatchesStatus(true);
      setFullCountryStatus(false);
      setCountryListStatus(false);
    } else if (matchedCountries.length === 1) {
      setTooManyCatchesStatus(false);
      setCapital(matchedCountries[0].capital);
      setFullCountryStatus(true);
      setCountryListStatus(false);
    } else if (
      matchedCountries.length > 0 &&
      matchedCountries.length <= 10 &&
      matchedCountries.length !== 1
    ) {
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
      <CountriesList
        status={countryListStatus}
        matchedCountries={matchedCountries}
        handleShowInfo={handleShowInfo}
      />
      <FullCountry
        status={fullCountryStatus}
        matchedCountries={matchedCountries}
        newSearch={newSearch}
        weather={weather}
      />
      <ShowInfo
        status={showInfoStatus}
        matchedCountries={matchedCountries}
        id={id}
        weather={weather}
        indexCountry={indexCountry}
        setCapital={setCapital}
      />
    </div>
  );
};

export default Search;
