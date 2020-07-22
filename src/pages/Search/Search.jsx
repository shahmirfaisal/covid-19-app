import React, { useState } from "react";
import classes from "./Search.module.scss";
import { Heading } from "../../styled-components/Heading";
import { useHistory } from "react-router-dom";

export const Search = () => {
  const [country, setCountry] = useState("");
  const history = useHistory();

  const searchCountryHandler = (e) => {
    e.preventDefault();

    if (country.trim().length) history.push(`/countries/${country.trim()}`);
  };

  return (
    <section>
      <Heading>SEARCH</Heading>

      <form className={classes.form} onSubmit={searchCountryHandler}>
        <input
          type="text"
          placeholder="Search a country..."
          required
          onChange={(e) => setCountry(e.target.value)}
          value={country}
        />
        <button>SEARCH</button>
      </form>
    </section>
  );
};
