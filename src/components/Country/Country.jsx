import React from "react";
import classes from "./Country.module.scss";
import { Link } from "react-router-dom";

export const Country = (props) => {
  const { name, totalCases, totalDeaths, totalRecovered } = props;

  return (
    <div className={classes.country}>
      <h3 className={classes.name}>{name}</h3>

      <h4>
        Cases: <span>{totalCases}</span>
      </h4>
      <h4>
        Deaths: <span>{totalDeaths}</span>
      </h4>
      <h4>
        Recovered: <span>{totalRecovered}</span>
      </h4>

      <p>
        <Link to={`/countries/${name}`}>Click to see more details.</Link>
      </p>
    </div>
  );
};
