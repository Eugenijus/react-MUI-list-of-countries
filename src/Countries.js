import React, { useEffect, useState } from "react";
import CountriesDropdown from "./CountriesDropdown.js";
import mockedData from "./dataMock.js";

const Countries = () => {
  const [countryData, setCountryData] = useState([]);
  const importantCountries = ["ES", "LV", "LT"];

  const getCountryData = async () => {
    // const response = await fetch(
    //   "https://restcountries.eu/rest/v2/all?fields",
    //   { method: "GET" }
    // );
    // const data = await response.json();
    //console.log(data);

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
    setCountryData(
      mockedData.filter(function(mockedData) {
        return importantCountries.includes(mockedData.alpha2Code);
      })
    );
  };

  useEffect(() => {
    console.log("Data ", { mockedData });
    getCountryData();
  }, []);

  return (
    <CountriesDropdown
      dropdownData={countryData}
      // handleCountryChange={handleCountryChange}
      // currentSelectedCountry={country}
    />
  );
};

export default Countries;
