import React from "react";
import StateList from "./StateList";
import "../styles/CountryList.css";

const CountryList = ({ countries, setCountries }) => {
  const editCountry = (index) => {
    const newName = prompt("Enter new country name:", countries[index].name);
    if (newName && window.confirm("Are you sure you want to update?")) {
      const updatedCountries = [...countries];
      updatedCountries[index].name = newName;
      setCountries(updatedCountries);
    }
  };

  const deleteCountry = (index) => {
    if (window.confirm("Are you sure you want to delete this country?")) {
      setCountries(countries.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="country-list">
      {countries.map((country, index) => (
        <div key={index} className="country-item">
            <h1>Country</h1>
            <hr/>
            <h2>{country.name}</h2>
            <button className="edit-btn" onClick={() => editCountry(index)}>Edit</button>
            <button className="delete-btn" onClick={() => deleteCountry(index)}>Delete</button>
          <StateList country={country} />
        </div>
      ))}
    </div>
  );
};

export default CountryList;
