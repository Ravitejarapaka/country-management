import React, { useState } from "react";
import CityList from "./CityList";
import "../styles/StateList.css";

const StateList = ({ country }) => {
  const [states, setStates] = useState(country.states);

  const addState = () => {
    const stateName = prompt("Enter state name:");
    if (stateName) {
      setStates([...states, { name: stateName, cities: [] }]);
    }
  };

  return (
    <div className="state-list">
      <h3>States</h3>
      <button className="add-btn" onClick={addState}>Add State</button>
      {states.map((state, index) => (
        <div key={index} className="state-item">
            <h1>State</h1>
            <hr/>
          <h4>{state.name}</h4>
          <CityList state={state} />
        </div>
      ))}
    </div>
  );
};

export default StateList;
