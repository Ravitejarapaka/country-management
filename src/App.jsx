import React, { useState } from "react";
import CountryList from "./components/CountryList";
import "./styles/App.css";

const App = () => {
  const [countries, setCountries] = useState([]);

  const addCountry = () => {
    const countryName = prompt("Enter country name:");
    if (countryName) {
      setCountries([...countries, { name: countryName, states: [] }]);
    }
  };

  return (
    <div className="app-container">
      <h1>Country, State, and City Management</h1>
      <button className="add-btn" onClick={addCountry}>Add Country</button>
      <CountryList countries={countries} setCountries={setCountries} />
    </div>
  );
};

export default App;
