import React, { useState } from "react";
import search from "../images/search.svg";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/SearchBarStyles";

function SearchBar({ classes, cityName }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => setValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    cityName(value);
    setValue("");
  };

  return (
    <form className={classes.form} autoComplete='off' onSubmit={handleSubmit}>
      <label className={classes.label} htmlFor='weather-input'>
        Search
      </label>
      <div className={classes.inputWrapper}>
        <input
          className={classes.input}
          type='text'
          autoFocus
          id='weather-input'
          value={value}
          onChange={handleChange}
        />
        <button type='submit' className={classes.button}>
          <img src={search} alt='plus icon' />
        </button>
      </div>
    </form>
  );
}

export default withStyles(styles)(SearchBar);
