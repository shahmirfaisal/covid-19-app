import React, { useEffect, useContext } from "react";
import { Heading } from "../../styled-components/Heading";
import { Context } from "../../store/context";
import { useParams } from "react-router-dom";
import { Spinner } from "../../components/Spinner/Spinner";
import { Card } from "../../styled-components/Card";
import classes from "../Dashboard/Dashboard.module.scss";
import { Error } from "../../styled-components/Error";

export const Country = () => {
  const {
    getCountry,
    country,
    showSpinner,
    removeCountry,
    error,
    removeError,
  } = useContext(Context);
  const { country: countryName } = useParams();

  useEffect(() => {
    getCountry(countryName);

    return () => {
      removeCountry();
      removeError();
    };
  }, [countryName]);

  return (
    <section>
      {showSpinner || !country ? (
        error ? (
          <Error margin="4rem 0 0 0">{error}</Error>
        ) : (
          <Spinner margin="5rem 0 0 0" />
        )
      ) : (
        <>
          <Heading margin="0 0 3rem 0">{country.name}</Heading>

          <section className={classes.grid}>
            <Card>
              <h5>Total Cases:</h5>
              <p>{country.totalCases}</p>
            </Card>

            <Card>
              <h5>New Cases:</h5>
              <p>{country.newCases}</p>
            </Card>

            <Card danger>
              <h5>Total Deaths:</h5>
              <p>{country.totalDeaths}</p>
            </Card>

            <Card danger>
              <h5>New Deaths:</h5>
              <p>{country.newDeaths}</p>
            </Card>

            <Card success>
              <h5>Total Recovered:</h5>
              <p>{country.totalRecovered}</p>
            </Card>

            <Card>
              <h5>Active Cases:</h5>
              <p>{country.activeCases}</p>
            </Card>

            <Card danger>
              <h5>Critical Cases:</h5>
              <p>{country.criticalCases}</p>
            </Card>

            <Card>
              <h5>Population:</h5>
              <p>{country.population}</p>
            </Card>
          </section>
        </>
      )}
    </section>
  );
};
