import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';

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

  const [weather, setWeather] = useState([]);
  const [capital, setCapital] = useState('');
  console.log('The capital in App.js is', capital);

  useEffect(() => {
    console.log('effect');
    if (!capital) setCapital('Lisbon');
    const api_key = process.env.REACT_APP_API_KEY;
    axios
      .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
      .then((response) => {
        console.log('promise fulfilled');
        setWeather(response.data);
      });
  }, [capital]);

  return (
    <div>
      <h1>Data for countries</h1>
      <Search countries={countries} weather={weather} setCapital={setCapital} capital={capital} />
    </div>
  );
};

export default App;
