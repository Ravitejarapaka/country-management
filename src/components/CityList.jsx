import React, { useState } from "react";
import "../styles/CityList.css";

const CityList = ({ state }) => {
  const [cities, setCities] = useState(state.cities);

  const addCity = () => {
    const cityName = prompt("Enter city name:");
    if (cityName) {
      setCities([...cities, cityName]);
    }
  };

  return (
    <div className="city-list">
      <h4>Cities</h4>
      <button className="add-btn" onClick={addCity}>Add City</button>
      {cities.map((city, index) => (
        <div key={index} className="city-item">
          <span>{city}</span>
        </div>
      ))}
    </div>
  );
};

export default CityList;
