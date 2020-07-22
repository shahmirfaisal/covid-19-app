import React, { useEffect, useContext } from "react";
import classes from "./Countries.module.scss";
import { Heading } from "../../styled-components/Heading";
import { Country } from "../../components/Country/Country";
import { Context } from "../../store/context";
import { Spinner } from "../../components/Spinner/Spinner";
import { Error } from "../../styled-components/Error";

export const Countries = () => {
  const {
    getCountries,
    countries,
    showSpinner,
    error,
    removeError,
  } = useContext(Context);

  useEffect(() => {
    if (!countries) getCountries();
    return () => removeError();
  }, []);

  return (
    <section>
      <Heading margin="0 0 3rem 0">COUNTRIES</Heading>

      {showSpinner || !countries ? (
        error ? (
          <Error>{error}</Error>
        ) : (
          <Spinner />
        )
      ) : (
        <section className={classes.grid}>
          {countries.map((country, i) => (
            <Country {...country} key={i} />
          ))}
        </section>
      )}
    </section>
  );
};
