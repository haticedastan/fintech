import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => setCountries(response.data));
  }, []);
  return (
    <div className="App">
      <h1>Ülke LİSTELERİ</h1>
      {countries.map((country) => {
        return (
          <div key={country.name}>
            <h2>{country.name}</h2>
            <h4>{country.capital}</h4>
            <p>
              <img src={country.flag} alt={country.name}
              style={{width:"100px"}}></img>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
