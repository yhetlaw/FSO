import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';

const App = (props) => {
  const [countries, setCountries] = useState([]);

  //Render de countries from the API
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
