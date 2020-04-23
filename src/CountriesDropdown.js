import React, { useEffect, useState } from "react";
import { Select, MenuItem } from "@material-ui/core";

const CountriesDropdown = props => {
  const [country, setCountry] = useState("Lithuania");
  const onChange = event => {
    const { value } = event.target;
    console.log(value);
    if (!value) return;
    setCountry(value);
  };

  return (
    <Select
      labelId="demo-customized-select-label"
      id="demo-customized-select"
      value={country}
      onChange={onChange}
    >
      {props.dropdownData.map((value, i) => (
        <MenuItem key={i} value={value.name}>
          <em>{value.name}</em>
        </MenuItem>
      ))}
      {/* /* <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>  */}
    </Select>
  );
};

export default CountriesDropdown;
