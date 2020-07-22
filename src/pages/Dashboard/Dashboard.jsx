import React, { useContext, useEffect } from "react";
import classes from "./Dashboard.module.scss";
import { Heading } from "../../styled-components/Heading";
import { Card } from "../../styled-components/Card";
import { Context } from "../../store/context";
import { Spinner } from "../../components/Spinner/Spinner";
import { Error } from "../../styled-components/Error";

export const Dashboard = () => {
  const {
    getGlobalInfo,
    globalInfo,
    showSpinner,
    error,
    removeError,
  } = useContext(Context);

  useEffect(() => {
    if (!globalInfo) getGlobalInfo();
    return () => removeError();
  }, []);

  return (
    <section>
      <Heading margin="0 0 3rem 0">DASHBOARD</Heading>

      {showSpinner || !globalInfo ? (
        error ? (
          <Error>{error}</Error>
        ) : (
          <Spinner margin="4rem 0 0 0" />
        )
      ) : (
        <section className={classes.grid}>
          <Card>
            <h5>Total Cases:</h5>
            <p>{globalInfo.totalCases}</p>
          </Card>

          <Card danger>
            <h5>Total Deaths:</h5>
            <p>{globalInfo.totalDeaths}</p>
          </Card>

          <Card success>
            <h5>Total Recovered:</h5>
            <p>{globalInfo.totalRecovered}</p>
          </Card>

          <Card>
            <h5>Active Cases:</h5>
            <p>{globalInfo.activeCases}</p>
          </Card>

          <Card success>
            <h5>Closed Cases:</h5>
            <p>{globalInfo.closedCases}</p>
          </Card>
        </section>
      )}
    </section>
  );
};
